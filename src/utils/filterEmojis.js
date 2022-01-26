export const filterEmojis = ({ emojisData, searchText = "", maxResults = 20 }) => {

    const filteredEmojis = emojisData.filter(emoji => {

        // Jika emoji.title ( merubah menjadi huruf kecil dengan toLowerCase() ) 
        // ada sebuah kata yaitu value dari searchText ( merubah menjadi huruf kecil dengan toLowerCase() ) 
        // maka akan mereturn true

        // Penjelasan Logikanya:
        // 
        // yang artinya semua emoji dengan title yang sesuai dengan searchText
        // semua value atau isi emoji tersebut akan masuk kedalam variable filteredEmojis sebagai value dari array
        // yang dikembalikan oleh method filter adalah array baru yang berisi
        // array yang sudah difilter yang akan disimpan didalam variable filteredEmojis

        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
            return true
        }

        // Logika ini sama kaya yang diatas
        // bedanya ini mencari sebuah keywords atau deskripsi dari emoji tersebut 
        if (emoji.keywords.includes(searchText.toLowerCase())) {
            return true
        }

        // dan jika tidak ada maka akan mereturn false atau mengembalikan nilai false
        // yang artinya kita tidak jadi menjalankan method filter

        return false

    })

    return filteredEmojis.splice(0, maxResults)
}