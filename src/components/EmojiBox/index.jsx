import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import classnames from 'classnames';

import styles from './Emoji.module.css';

const EmojiBox = ({ title, symbol }) => {
    const [selected, setSelected] = useState(false)

    // useEffect ini akan dijalankan bila state selected dijalankan
    useEffect(() => {
        // variable timer mempunyai sebuah isi setTimeout yang nantinya
        // akan kita clear prosesnya atau dihentikan menggunakan clearTimeout
        // tapi didalam setTimeout disetting untuk merubah nilai selected menjadi false kembali
        // dengan setSelected yang berdurasi 0.6 detik 
        // yang nantinya nilai selected berubah kembali seperti semula menjadi false
        // dan emoji menjadi bentuk semula

        const timer = setTimeout(() => setSelected(false), 600)

        return () => clearTimeout(timer)
    }, [selected])

    return (
        <div
        // Jika onClick dijalankan yang berarti box icon di klik
        // akan mengcopy symbolnya dengan props navigator.clipboard.writeText(symbol)
        // dan akan mengubah state selected menjadi true
        // karena setSelected di set menjadi true
        onClick={() => {
            // prop navigator.clipboard.writeText() ini digunakan untuk melakukan copy dan menyimpannya dalam clipboard yang bisa kita paste nantinya
            
            // ini dia propnya navigator.clipboard.writeText(symbol)
            navigator.clipboard.writeText(symbol)

            // setSelected menyetting nilainya menjadi true yang awalnya false
            setSelected(true)

            // setelah semua proses diatas dijalankan maka useEffect juga akan berjalan
            // karena useEffect sudah disetting jalan ketika ada perubahan pada state selected
            // terjadi perubahannya karena selected yang awalnya bernilai false berubah menjadi true
            // karena setSelected diset menjadi true maka terjadilah perubahan
        }}
        className={classnames(styles.emojiBox, {
            [styles.selected]: selected
        })}
        >
            <p 
                className={styles.emoji}
                // prop dangerouslySetInnerHTML ini digunakan unruk mengonvert string menjadi sebuah html yang didalamnya ada emoji
                dangerouslySetInnerHTML={{
                    __html: `&#${symbol.codePointAt(0)}`
                }}
            />

            <p className={styles.emojiText}>
                {/* 
                    apakah selected bernilai true
                    jika benar maka yang muncul di browser adalah teks Copied
                    tetapi jika salah maka akan memunculkan nama dari masing - masing emoji
                */}
                {selected ? 'Copied' : title}
            </p>
        </div>
    )
}

EmojiBox.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
}

export default EmojiBox