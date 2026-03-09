/**
 * ---------------------------------------------------------
 * FUNCIÓN: enviarRespuestas
 * ---------------------------------------------------------
 * mediante una petición HTTP POST y retorna el resultado.
 *
 * @param {Object} respuestas - Objeto con las respuestas
 * @returns {Promise<Object>} Objeto JSON con las respuestas procesadas por el backend
 */

export async function enviarRespuestas(respuestas) {

    //BLOQUE 1: Petición HTTP al backend

    const response = await fetch("http://localhost:8080/api/quiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(respuestas)
    });


    /**
     * ---------------------------------------------------------
     * BLOQUE 2: Validación de respuesta HTTP
     * ---------------------------------------------------------
     * response.ok es true si el status HTTP está
     * entre 200–299.
     *
     * Si ocurre un error (400, 500, etc.),
     * lanzamos una excepción.
     * ---------------------------------------------------------
     */
    if (!response.ok) {
        throw new Error("Error al enviar el quiz al servidor");
    }


    /**
     * espera a que el backend envie la respues
     * ---------------------------------------------------------
     */
    return await response.text(); 
}