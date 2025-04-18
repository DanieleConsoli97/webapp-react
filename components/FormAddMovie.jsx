import { useState } from "react";

const FormAddMovie = () => {
    const endpoint = `http://localhost:3000/movies/`;
    
    const initialValues = {
        title: '',
        director: '',
        genre: '',
        release_year: '',
        abstract: '',
        image: null
    };
    
    const [formData, setFormData] = useState(initialValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [preview, setPreview] = useState(null);
    
    const addDataForm = (e) => {
        const { name, value, files } = e.target;
        
        if (name === 'image') {
            const file = files[0];
            setFormData({ 
                ...formData, 
                [name]: file
            });
            
            // Crea anteprima dell'immagine
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setPreview(null);
            }
        } else {
            setFormData({ 
                ...formData, 
                [name]: value 
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formDataToSend = new FormData();
        
        // Aggiungi tutti i campi al FormData
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== null) {
                formDataToSend.append(key, value);
            }
        });

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formDataToSend
            });
            
            const data = await response.json();
            console.log("Successo:", data);
            setFormData(initialValues);
            setPreview(null);
            
            // Mostra messaggio di successo (potrebbe essere implementato con uno stato)
            alert("Film aggiunto con successo!");
        } catch (error) {
            console.error("Errore:", error);
            alert("Si è verificato un errore durante l'invio. Riprova.");
        } finally {
            setIsSubmitting(false);
        }
    }
    
    // Classi separate per migliorare la leggibilità e evitare errori
    const fileInputClasses = "w-full px-4 py-2 rounded-lg border border-gray-300" +
                           " file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0" +
                           " file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700" +
                           " hover:file:bg-blue-100 transition duration-200";
    
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-800 p-6">
                    <h2 className="text-2xl font-bold text-white text-center">Aggiungi un Nuovo Film</h2>
                </div>
                
                <form 
                    onSubmit={handleSubmit} 
                    className="p-6 space-y-6"
                    encType="multipart/form-data"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Titolo</label>
                            <input 
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                                name="title" 
                                type="text" 
                                value={formData.title} 
                                onChange={addDataForm} 
                                placeholder="Inserisci il titolo"
                                required 
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Regista</label>
                            <input 
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                                name="director" 
                                type="text" 
                                value={formData.director} 
                                onChange={addDataForm} 
                                placeholder="Inserisci il regista"
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Genere</label>
                            <input 
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                                name="genre" 
                                type="text" 
                                value={formData.genre} 
                                onChange={addDataForm} 
                                placeholder="Inserisci il genere"
                                required 
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Anno di uscita</label>
                            <input 
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                                name="release_year" 
                                type="text" 
                                value={formData.release_year} 
                                onChange={addDataForm} 
                                placeholder="Inserisci l'anno"
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Trama</label>
                        <textarea 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                            name="abstract" 
                            rows="4"
                            value={formData.abstract} 
                            onChange={addDataForm} 
                            placeholder="Inserisci la trama del film"
                            required 
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Immagine</label>
                        <div className="flex items-center space-x-4">
                            <div className="flex-1">
                                <input 
                                    className={fileInputClasses}
                                    name="image" 
                                    type="file" 
                                    accept="image/*"
                                    onChange={addDataForm} 
                                    required 
                                />
                            </div>
                            
                            {preview && (
                                <div className="h-20 w-20 overflow-hidden rounded-lg border border-gray-300">
                                    <img 
                                        src={preview} 
                                        alt="Anteprima" 
                                        className="h-full w-full object-cover" 
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 rounded-lg font-medium text-white transition duration-300 ${
                            isSubmitting 
                                ? 'bg-gray-500 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                        }`}
                    >
                        {isSubmitting ? 'Invio in corso...' : 'Aggiungi Film'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormAddMovie;