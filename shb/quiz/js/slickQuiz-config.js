// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Sejarah HinduBudha!",
        "main":    "<p>Ayo Kerjakan!</p>",
        "results": "<h5>Tetaplah Belajar dan cintai sejarah :)</h5><p></p>",
        "level1":  "Selamat anda full complate!!",
        "level2":  "Nice!",
        "level3":  "Cukup tapi harus belajar lebih giat!",
        "level4":  "Belajar lagi ya !",
        "level5":  "Ayo Giat Belajar!" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Kebon Kopi salah satu prasasti dari kerajaan adalah....",
            "a": [
                {"option": "Singasari",      "correct": false},
                {"option": "Kutai",     "correct": false},
                {"option": "Tarumanegara",      "correct": true},
                {"option": "Kediri",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Jawabannya Benar!</span></p>",
            "incorrect": "<p><span>Jawabannya Salah!</span></p>" // no comma here
        },
        { // Question 2
            "q": "Salah satu raja dari Kerajaan Sriwjaya adalah....",
            "a": [
                {"option": "Hayam Wuruk",    "correct": false},
                {"option": "Balaputra Dewa",     "correct": true},
                {"option": "Kidung wijayakama",      "correct": false},
                {"option": "Kudungga",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Jawabannya Benar!</span></p>",
            "incorrect": "<p><span>Jawabannya Salah!</span> </p>" // no comma here
        },
        { // Question 3
            "q": "Yang merupakan prasasti yang berasal dari Kerajaan Kutai adalah",
            "a": [
                {"option": "Tugu",        "correct": false},
                {"option": "Kujang",           "correct": false},
                {"option": "Kitab Sutasoma",  "correct": false},
                {"option": "Yupa",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Jawabannya Benar!</span></p>",
            "incorrect": "<p><span>Jawabannya Salah!</span> Yang merupakan prasasti yang berasal dari Kerajaan Kutai adalah Yupa.</p>" // no comma here
        },
        { // Question 4
            "q": "Majapahit mencapai puncak kejayaan pada masa pemerintahan raja …",
            "a": [
                {"option": "Kartanegara",    "correct": false},
                {"option": "Kudungga",    "correct": false},
                {"option": "Raden Wijaya",    "correct": false},
                {"option": "Hayam Wuruk",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Jawabannya Benar!</span></p>",
            "incorrect": "<p><span>Jawabannya Salah!</span> Majapahit mencapai puncak kejayaan pada masa pemerintahan raja Hayam Wuruk" // no comma here
        },
        { // Question 5
            "q": "Kerajaan yang terkenal dengan kejujurannya dengan Diletakkanlah suatu pundi-pundi yang berisi uang dinar di suatu jalan. Sampai tiga tahun lamanya tidak ada yang berani mengambil yaitu...",
            "a": [
                {"option": "Kerajaan Kutai",   "correct": false},
                {"option": "Kerajaan Kalingga/Ho-ling",         "correct": true},
                {"option": "Kerajaan Majapahit",  "correct": false},
                {"option": "Kerajaan Kalin",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Jawabannya Benar!</span></p>",
            "incorrect": "<p><span>Jawabannya Salah!</span>yang benar adalah kerajaan Kalingga/Ho-ling</p>" // no comma here
        },
        { // Question 6
            "q": "Salah satu Prasasti Kerajaan Tarumanegara adalah..",
            "a": [
                {"option": "Prasasti Sutasoma",   "correct": false},
                {"option": "Prasasti Tugu",         "correct": true},
                {"option": "Prasasti Gong",  "correct": false},
                {"option": "Prasasti Kedukan Bukit",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Jawabannya Benar!</span></p>",
            "incorrect": "<p><span>Jawaban Salah !</span>Salah satu Prasasti Kerajaan Tarumanegara adalah Prasasti Tugu</p>" // no comma here
        },
        { // Question 7
            "q": " Prasasti Kedukan Bukit adalah prasasti dari kerajaan..",
            "a": [
                {"option": "Sriwijaya",   "correct": true},
                {"option": "Tarumanegara",         "correct": false},
                {"option": "Majapahit",  "correct": false},
                {"option": "Citarum",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Jawabannya Benar!</span></p>",
            "incorrect": "<p><span>Jawaban Salah!</span>Prasasti Kedukan Bukit adalah prasasti dari kerajaan Sriwijaya</p>" // no comma here
        },
        { // Question 8
            "q": "Apa nama Candi yang terkenal di jogja bercorak agama Hindu?",
            "a": [
                {"option": "Prambanan",   "correct": true},
                {"option": "Tikus",         "correct": false},
                {"option": "Borobudhur",  "correct": false},
                {"option": "Tabanan",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Sugoiii</span></p>",
            "incorrect": "<p><span>Wah salah!</span>jawabannya Prambanan</p>" // no comma here
        },
        { // Question 9
            "q": "Prasasti Ciaruteun berasal dari kerajaan...",
            "a": [
                {"option": "Tarumanegara",   "correct": true},
                {"option": "Sriwijaya",         "correct": false},
                {"option": "Vietnam",  "correct": false},
                {"option": "Kutai",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Pinter!</span></p>",
            "incorrect": "<p><span>Salah -_-</span>Yang Benar adalah dari kerajaan Tarumanegara</p>" // no comma here
        },
        { // Question 10
            "q": "Teori yang berpendapat berpendapat bahwa agama Hindu masuk ke Indonesia dibawa oleh kaum Brahmana karena hanyalah kaum Brahmana yang berhak mempelajari dan mengerti isi kitab suci Weda adalah",
            "a": [
                {"option": "Teori Brahmana",   "correct": true},
                {"option": "Teori Sudra ",         "correct": false},
                {"option": "Teori Arua Balik",  "correct": false},
                {"option": "Teori Gabungan",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Pinter!!</span></p>",
            "incorrect": "<p><span>Wah salah</span>Jawaban yang benar itu Teori Brahmana bos :/ </p>" // no comma here
        },
        { // Question 11
            "q": "Kitab Sutasoma di karang oleh siapa ya?",
            "a": [
                {"option": "Mpu Tantular",   "correct": true},
                {"option": "Mpu Sendok",         "correct": false},
                {"option": "Mpu Ajah",  "correct": false},
                {"option": "Mpu Havellar",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Pinter!!!</span></p>",
            "incorrect": "<p><span>Wah salah!</span>orang mana gan? hehe</p>" // no comma here
        },
        { // Question 12
            "q": "Prasasti Kota Kapur termasuk peninggalan kerajaan...",
            "a": [
                {"option": "Sriwijaya",   "correct": true},
                {"option": "Demak",         "correct": false},
                {"option": "Majapahit",  "correct": false},
                {"option": "Kalingga",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Joss</span> Pinter!!!</p>",
            "incorrect": "<p><span>Wah Salah!</span>yang bener Sriwijaya</p>" // no comma here
        },
        { // Question 13
            "q": "Pusat pemerintahan majapahit diprovinsi....",
            "a": [
                {"option": "Jawa Timur",   "correct": true},
                {"option": "Jawa Tengah",         "correct": false},
                {"option": "Jawa Barat",  "correct": false},
                {"option": "Sumatera Selatan",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Cendol gan :D!</span> </p>",
            "incorrect": "<p><span>Wah Salah ! </span>yang benar jawa timur</p>" // no comma here
        },
        { // Question 14
            "q": "Pendiri kerajaan Kutai adalah",
            "a": [
                {"option": "Kudungga",   "correct": true},
                {"option": "Hayam Wuruk",         "correct": false},
                {"option": "Dapunta Hyang",  "correct": false},
                {"option": "Ken Arok",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Cendol gan :D!</span> </p>",
            "incorrect": "<p><span>Wah Salah ! </span>yang benar Kudungga woy -_-</p>" // no comma here
        },
        { // Question 15
            "q": "Kerajaan Hindu Tertua di indonesia adalah...",
            "a": [
                {"option": "Kutai",   "correct": true},
                {"option": "Tarumanegara",         "correct": false},
                {"option": "Majapahit",  "correct": false},
                {"option": "Kaling",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Cendol gan :D!</span> </p>",
            "incorrect": "<p><span>Wah Salah ! </span>yang benar Kerajaan Kutai -_-</p>" // no comma here
        },

    ]
};