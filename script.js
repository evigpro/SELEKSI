// Fungsi untuk menampilkan modal dengan status seleksi
function checkStatus() {
    var regNumber = document.getElementById("regNumber").value;
    var statusModal = document.getElementById("statusModal");
    var statusText = document.getElementById("statusText");
    var whatsappLink = document.getElementById("whatsappLink");
    var whatsappContainer = document.getElementById("whatsappContainer");
    var modalContent = document.getElementById("modalContent");

    // Data nomor registrasi dan nama untuk peserta yang lulus
    var lulusRegistrasi = {
        "AR1123": "*Annisa Rahmawati*",
        "ASP2234": "*Arya setya Pratama*",
        "AVA7890": "*Aurellia Voleta Atmaja*",
        "DHS8786": "*Deannova Hannito Satriawan*",
        "HF2357": "*Husna Faiza*",
        "KRP6654": "*Kusuma Raga Permana*",
        "MIK7612": "*Maritza Intan Kinanti*",
        "MFEL1111": "*Muhammad Fahry Evan Luthfiansyah*",
        "MKA2345": "*Mutiara kartika aji*",
        "NHF8HY": "*Nawfal Hilmii Fathony*",
        "RVHSG3G5": "*RAINA VANIA HARSYA SAPUTRI*",
        "RAK987J": "*Raissa Atha Khairiyah*",
    };

    // Data nomor registrasi untuk peserta yang belum lulus
    var belumLulusRegistrasi = {
        "RAND6F7": "*Raffa Al-Ghifary Novara*",
        "CMA8768": "*Chika Maulida Arohmah*",
        "BWY4567": "*Benedictus Wira Yudanta*",
    };

    // Mengatur pesan dan status berdasarkan nomor registrasi
    if (lulusRegistrasi[regNumber]) {
        // Peserta lulus
        var nama = lulusRegistrasi[regNumber];
        statusText.textContent = `${nama}, Selamat, Anda Lulus Ke tahap Berikutnya, Silahkan Clik [Kirim Pesan ke WhatsApp] Berikut untuk informasi Selanjutnya.`;
        modalContent.style.backgroundColor = "#2a5298"; // Biru jika lulus
        whatsappLink.href = `https://wa.me/6281392375768?text=Assalamualaikum,%20Saya%20${nama}%20lulus%20ke%20tahap%20berikutnya.%20Saya%20mohon%20informasi%20lebih%20lanjut.`;
        whatsappContainer.style.display = "block"; // Tampilkan tombol WhatsApp
    } else if (belumLulusRegistrasi[regNumber]) {
        // Peserta belum lulus
        var nama = belumLulusRegistrasi[regNumber];
        statusText.textContent = `${nama}, Mohon Maaf, Anda Belum Bisa lanjut ke tahap Selanjutnya, Tetap Semangat Walau Kali ini tidak lolos.`;
        modalContent.style.backgroundColor = "#ff4d4d"; // Merah jika belum lulus
        whatsappContainer.style.display = "none"; // Sembunyikan tombol WhatsApp
    } else {
        // Nomor registrasi tidak ditemukan
        statusText.textContent = "Nomor Registrasi Tidak Ditemukan";
        modalContent.style.backgroundColor = "#ffcc00"; // Kuning jika nomor tidak ditemukan
        whatsappContainer.style.display = "none"; // Sembunyikan tombol WhatsApp
    }

    // Tampilkan modal
    statusModal.style.display = "flex";
}

// Menutup modal
function closeModal() {
    var statusModal = document.getElementById("statusModal");
    statusModal.style.display = "none";
}

// Menangani tampilan loading
window.onload = function() {
    var loadingScreen = document.getElementById("loading");
    setTimeout(function() {
        loadingScreen.style.display = "none"; // Hapus loading screen setelah 3 detik
    }, 3000);
}
