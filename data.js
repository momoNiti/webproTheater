vm = new Vue({
    el: "#app",
    data: {

        //user
        user: {
            name: "",
            surname: "",
            email: "",
            address: "",
            userType: "",
            paymentType: "",
            creditNumber: "",
            phoneNumber: "",
            adultNumber: 0,
            childNumber: 0,
            price: 0,
        },
        //cineplex
        cineplex_select: "C0",
        seat_select: [],
        date_select: '',
        time_select: '',
        // 
        searchText: '',
        click_count: 1,
        check_cate: 0,
        // หมวดหมู่ภาพยนตร์
        categories: [
            { id: 1, name: "Action" },
            { id: 2, name: "Adventure" },
            { id: 3, name: "Animation" },
            { id: 4, name: "Biography" },
            { id: 5, name: "Crime" },
            { id: 6, name: "Comedy" },
            { id: 7, name: "Drama" },
            { id: 8, name: "History" },
            { id: 9, name: "Horror" },
            { id: 10, name: "Mystery" },
            { id: 11, name: "Sci-Fi" },
            { id: 12, name: "Romance" },
        ],
        cineplexs: [
            { id: "C0", name: "โรงภาพยนตร์ทั้งหมด", selected: "selected", disabled: "disabled" },
            { id: "C1", name: "เมเจอร์ ซีนีเพล็กซ์ โลตัส บางกะปิ", selected: "" },
            { id: "C2", name: "เมเจอร์ ซีนีเพล็กซ์ สุขุมวิท", selected: "" },
            { id: "C3", name: "เมกา ซีนีเพล็กซ์", selected: "" },
            { id: "C4", name: "ซีคอน ซีนีเพล็กซ์", selected: "" },
            { id: "C5", name: "พาราไดซ์ ซีนีเพล็กซ์", selected: "" },
        ],
        // ภาพยนตร์
        movies: [
            {
                showMe: true,
                id: 1,
                name: { en: "Captain Marvel", th: "กัปตันมาร์เวล" },
                poster: "http://www.majorcineplex.com/uploads/movie/2465/thumb_2465.jpg",
                director: "แอนนา โบเดน, ไรอัน เฟล็ก",
                actors: "บรี ลาร์สัน, ซามูเอล แอล. แจ็กสัน, ลี เพซ, จู๊ด ลอว์",
                categories: [1, 2, 11],
                webdetail: "detail1.html",
                ucode: "Z1BCujX3pw8",
                synopsis: `<div class="desclistsynopsis"><p></p><p>เรื่องราวของของแครอล แดนเวอร์ส หรือ กัปตัน มาร์เวล ฮีโร่ที่ทรงพลังที่สุดในจักรวาลมาร์เวล กับการปกป้องโลกจากสงครามระดับจักรวาลระหว่างเอเลี่ยน 2 เผ่าพันธุ์ มาร์เวล สตูดิโอส์ จะพาเราไปพบกับการผจญภัยที่คุณไม่เคยเห็นมาก่อนในประวัติศาสตร์ของจักรวาลภาพยนตร์มาร์เวล พบกัน มีนาคม 2562</p><br><p></p></div>`
            },
            {
                showMe: true,
                id: 2,
                name: { en: "Friend Zone", th: "ระวัง..สิ้นสุดทางเพื่อน" },
                poster: "http://www.majorcineplex.com/uploads/movie/2628/thumb_2628.jpg",
                director: "ชยนพ บุญประกอบ",
                actors: "นาย ณภัทร เสียงสมบุญ, ใบเฟิร์น พิมพ์ชนก ลือวิเศษไพบูลย์",
                categories: [6, 12],
                webdetail: "detail2.html",
                ucode: "4S81gZQ68LE",
                synopsis: `<div class="desclistsynopsis"><p></p><p>FRIEND ZONE<br><br>ระวัง..สิ้นสุดทางเพื่อน<br><br>คำเตือน! ที่เพื่อนทุกคนพึงระวัง<br><br>เขตกักกันความสัมพันธ์<br><br>ที่ห้ามรักกันเกินกว่าเพื่อน</p><br><br><p>บนโลกใบนี้ คงมีชายหญิงอีกหลายคู่ที่กำลังไต่อยู่บนตะเข็บชายแดนแห่งความสัมพันธ์ของความเป็น “เพื่อน”&nbsp; กับ “แฟน” ซึ่งพื้นที่เล็กๆริมชายแดนตรงนี้มีชื่อเรียกแบบสากลว่า FRIEND ZONE หรือเขตแดนพิเศษของ คนที่อยู่ในสภาพ...กลับตัวไปเป็นเพื่อนก็ไม่ได้ ให้ไปเป็นแฟนก็ไปไม่ถึง&nbsp;</p><br> <br><p>ปาล์ม (นาย - ณภัทร เสียงสมบุญ) คือ หนึ่งในคนที่ติดอยู่ใน FRIEND ZONE ของ กิ๊ง (ใบเฟิร์น - พิมพ์ชนก ลือวิเศษไพบูลย์) เพื่อนสนิทของเขามานานเป็น 10 ปี ปาล์มเคยพยายามจะออกจากเขตแดนพิเศษนี้ ด้วยการสารภาพรักกับกิ๊งไปตอน ม.ปลาย แต่ถูกกิ๊งปฏิเสธง่ายๆด้วยคำว่า&nbsp;</p><br> <br><p>“เป็นเพื่อนกันก็ดีอยู่แล้ว”</p><br><br><p>... นับจากวันนั้น ปาล์มกับกิ๊งก็เป็นยิ่งกว่าเพื่อนสนิท ทุกครั้งที่ปาล์มเลิกกับแฟนไม่ว่ากี่คนต่อกี่คน กิ๊งก็จะคอยด่าเตือนสติ และถ้ากิ๊งมีปัญหาทะเลาะกับแฟน ไม่ว่ากิ๊งจะอยู่ที่ไหน จะพม่า มาเลย์ หรือฮ่องกง แค่เพียงโทรมา สจ๊วตอย่างปาล์มก็พร้อมจะบินไปหาทันที ก็ไม่รู้ว่าเป็นเพราะความใจดีเหนือขีดจำกัดนี้หรือเปล่า ที่ทำให้เมื่อกิ๊งมีปัญหากับพี่เท็ด (เจสัน ยัง) แฟนคนปัจจุบัน จู่ๆกิ๊งก็ถามปาล์มขึ้นมาว่า</p><br> <br><p>“แกเคยคิดไหม... ถ้าเราสองคนเป็นแฟนกันจะเป็นยังไง”&nbsp;</p><br> <br><p>ทันใดนั้น สัญญาณเตือนภัยในใจปาล์มก็ดังขึ้นถี่ๆ เพราะปาล์มรู้ดีว่านี่คือโอกาสครั้งสำคัญที่เขาจะได้ออกจาก FRIEND ZONE เพียงแต่เขาไม่รู้ว่าการออกไปครั้งนี้ จะทำให้เขาได้เริ่มต้นทางแฟน หรือสิ้นสุดทางเพื่อนกับกิ๊งกันแน่!!!</p><br> <br><p>FRIEND ZONE<br><br>ระวัง..สิ้นสุดทางเพื่อน<br><br>14 กุมภาพันธ์นี้ ในโรงภาพยนตร์&nbsp;</p><br><br><p>#FriendZone<br><br>#ระวังสิ้นสุดทางเพื่อน</p><br><p></p></div>`
            },
            {
                showMe: true,
                id: 3,
                name: { en: "Alita Battle Angel", th: "อลิตา แบทเทิล แองเจิ้ล" },
                poster: "http://www.majorcineplex.com/uploads/movie/2194/thumb_2194.jpg",
                director: "โรเบิร์ต รอดริเกซ",
                actors: "โรซา ซาลาซาร์, อีซา กอนซาเลซ, เจนนิเฟอร์ คอนเนลลี",
                categories: [1, 2, 12],
                webdetail: "detail3.html",
                ucode: "cislZ9S0ocA",
                synopsis: `<div class="desclistsynopsis"><p></p><p>Alita: Battle Angel ภาพยนตร์ดัดแปลงจากการ์ตูนญี่ปุ่นเรื่อง เพชฌฆาตไซบอร์ก หรือในชื่อญี่ปุ่นว่า Gunnm ซึ่งเขียนโดย คิชิโระ ยูกิโตะ และได้รับการดัดแปลงเป็นแอนิเมชั่นจากเนื้อเรื่องในหนังสือเล่มแรกๆในชื่อ Battle Angel เรื่องราวเกิดขึ้นในอนาคตอันไกลโพ้น ซึ่งไซบอร์คและหุ่นยนตร์กลายเป็นเรื่องปกติ เมืองลอยฟ้าทิฟาเรส เก็บงำความลับอันดำมืด มันทิ้งขยะไร้ค่าลงสู่โล่งเบื้องล่าง และที่ลานทิ้งขยะนั้นเอง แพทย์ไซบอร์ค อิโดะ พบเข้ากับชิ้นส่วนหัวและลำตัวของเด็กสาวไซบอร์คที่ยังมีชีวิตอยู่ได้ มีเพียงสมองของเธอเท่านั้นที่เป็นมนุษย์ ส่วนอื่นในร่างกายของเธอล้วนเป็นเครื่องจักร เธอสูญเสียความทรงจำทั้งหมดในอดีต และได้ชื่อใหม่จากอิโดะ "เอลิตา" เขาสร้างเธอขึ้นมาใหม่อีกครั้งและกลายเป็นเสมือนบิดาของเธอในฐานะผู้มอบร่างกายใหม่ให้ อย่างไรก็ตาม ข่าวการฆาตกรรมต่อเนื่องได้เริ่มแพร่กระจายไปในเมือง อลิตาเริ่มสงสัยอิโดะในฐานะผู้ลงมือเพื่อหาชิ้นส่วนร่างกายให้เธอ แต่เมื่อเธอติดตามเขาออกไปในคืนหนึ่ง จึงได้พบว่าที่แท้เขากำลังตามจับตัวฆาตกร ภายใต้ฐานะ "ฮันเตอร์ วอร์ริเออร์" ที่เขาได้รับมอบหมายมา ระหว่างการเข้าปะทะกับฆาตกรตัวจริงนั้น สัญชาติญาณของเด็กสาวก็ทำงาน เธอล้มฆาตกรได้ด้วยศิลปะการต่อสู้โบราณ ผลสุดท้าย เธอจึงตัดสินใจเข้าช่วยเหลืออิโดะในการพิทักษ์ความยุติธรรม และได้กลายมาเป็นฮันเตอร์วอร์ริเออร์เช่นกัน เธอปลดล็อคความสามารถและพลังที่แท้จริงของตนเอง เข้าต่อสู้กับศัตรูที่แสนอันตราย และเพื่อนผู้ยึดมั่นในอุดมการณ์</p><br><p></p></div>`
            },
            {
                showMe: true,
                id: 4,
                name: { en: "Ruk-1-Pen-Pasa", th: "รักไม่เป็นภาษา" },
                poster: "http://www.majorcineplex.com/uploads/movie/2609/thumb_2609.jpg",
                director: "ทีมไข่กวน",
                actors: "โบว์ - เมลดา สุศรี, ฟรอยด์ - ณัฏฐพงษ์ ชาติพงศ์, เบสท์ - ณัฐสิทธิ์ โกฏิมนัสวนิชย์, ซุง กิดาการ ฉัตรแก้วมณี, แอริน ยุกตะทัต, ปริม - อัจฉรียา โพธิพิพิธธนากร, แอนโทเนีย ทูทิลล์, แม็ค - อชิระ เอทเตอร์, เคลเล็น เจมส์ ",
                categories: [6, 12],
                webdetail: "detail4.html",
                ucode: "BphwyZm14cc",
                synopsis: `<div class="desclistsynopsis"><p></p><p>พรอน (โบว์ – เมลดา) สาวสุดเพี้ยนที่เมื่อเจอความกดดันเมื่อไหร่เป็นต้องเผลอพูดเป็นคำผวนทุกที พรอน แอบหลงรัก ป๊อป (ซุง - กิดาการ) รุ่นพี่สุดฮอตในที่ทำงานที่เธอกำลังฝึกงานอยู่ ทุกอย่างเหมือนจะไปได้ดี แต่...พรอนต้องเดินทางไปอังกฤษแบบกะทันกัน เพราะ เพ็ญ (แอริน ยุกตะทัต) พี่สาวสุดที่รักกำลังจะแต่งงานสายฟ้าแลบกับ ไมเคิล (เคลเล็น เจมส์) หนุ่มอังกฤษผู้อ่อนโยนที่คบหากันได้เพียง 7 วัน การเดินทางไกลครั้งแรกของ พรอน จึงได้เริ่มต้นขึ้น...&nbsp;<br><br>ชีวิต พรอน ในลอนดอน มีเรื่องให้ลุ้นระทึกได้ทุกวัน เพ็ญ บังคับให้ พรอน ไปเรียนคอร์สฝึกพูดภาษาอังกฤษ แล้วหลอกเธอว่าอาการเพี้ยน ๆ ของเธอจะหาย ถ้าเธอมีแฟนเป็นฝรั่ง ยิ่งเมื่อเธอได้เจอแก๊งเพื่อนใหม่สุดป่วนอย่าง โบ้, จู๊ด และอองตวน&nbsp; ในโรงเรียนสอนภาษาอังกฤษ จนกลายเป็นยัยเพี้ยนพรอนแอนด์เดอะแก๊ง</p><br><br><p>โบ้ (ฟรอยด์ - ณัฏฐพงษ์ ชาติพงศ์) ช่างซ่อมรถ ที่คิดถึงแฟนสาวจนทนไม่ไหว เลยลงทุนประกาศขายบ้านเก่าเพื่อหาเงินทุนเดินทางไปเฝ้าคนรักที่ต่างประเทศทั้ง ๆ ที่พูดภาษาอังกฤษได้แค่ Yes No Ok<br><br>&nbsp;จู๊ด (เบสท์ - ณัฐสิทธิ์ โกฏิมนัสวนิชย์) เด็กหนุ่มทะเล้นมาดกวน ที่พูดได้เฉพาะภาษาอังกฤษในเมนูอาหาร ตั้งเป้าภารกิจแอ้มสาวลอนดอนให้ได้เพราะถูกเพื่อนท้า แต่ไป ๆ มา ๆ กลับไม่ง่ายอย่างที่คิด เพราะดันไปตกหลุมรักกับ เคธี่ (แอนโทเนีย ทูทิลล์) เพื่อนร่วมงานสาวชาวอังกฤษ แต่เธอกลับไม่พูดกับจู๊ดซักคำ ความสัมพันธ์ที่ไม่เคยแม้จะเอ่ยปากคุยกันของพวกเขาจึงเกิดขึ้น...<br><br>อองตวน (แม็ค - อชิระ เอทเตอร์) หนุ่มจอมตื้อลูกครึ่งยุโรปเอเซีย ที่มีกิจการ Food truck แต่พูดภาษาอังกฤษไม่ได้ เกรดภาษาอังกฤษติดลบพอกัน กลับตกหลุม พรอน ตั้งแต่แรก พรอนยังถูกอองตวนตามจีบด้วยภาษาไทยลามกที่จู๊ดเป็นคนสอน<br><br>ต่างคนต่างที่มา แม้แต่วุ้นแปลภาษา หรือ Google Translate ก็คงเอาไม่อยู่ สุดท้ายเสียงเมโลดี้ของหัวใจจะปรับจูนให้ตรงกันได้หรือไม่ ติดตามได้ในโรงภาพยนตร์&nbsp;</p><br><p></p></div>`
            },
            {
                showMe: true,
                id: 5,
                name: { en: "How to Train 3", th: "อภินิหารไวกิ้งพิชิตมังกร 3" },
                poster: "http://www.majorcineplex.com/uploads/movie/2414/thumb_2414.jpg",
                director: "ดีน เดอบลัวส์",
                actors: "เคต แบลนเชตต์, ที.เจ. มิลเลอร์, เจอราร์ด บัตเลอร์",
                categories: [3],
                webdetail: "detail5.html",
                ucode: "2BP38770KNo",
                synopsis: `<div class="desclistsynopsis"><p></p><p>จุดเริ่มต้นจากมิตรภาพเหลือเชื่อระหว่างไวกิ้งหนุ่มกับมังกรไนท์ ฟิวรี ที่น่าสะพรึงกลัว ได้กลายเป็นไตรภาคอีพิคที่บอกเล่าเรื่องราวชีวิตของพวกเขา ในตำนานบทใหม่นี้ ในที่สุด ฮิคคัพและทูธเลสก็จะได้ค้นพบโชคชะตาที่แท้จริงของพวกเขาเสียที นั่นคือการเป็นหัวหน้าหมู่บ้านในฐานะผู้นำของเหล่าเบิร์ค เคียงข้างแอสทริด และการเป็นมังกรผู้นำฝูง ในขณะที่ทั้งคู่กำลังจะขึ้นครองอำนาจ ภัยคุกคามที่ร้ายกาจที่สุดเท่าที่พวกเขาเคยเผชิญ รวมถึงการปรากฏตัวของไนท์ ฟิวรีเพศเมีย จะทดสอบสายสัมพันธ์มิตรภาพระหว่างพวกเขาอย่างที่ไม่เคยปรากฏมาก่อน</p><br><p></p></div>`
            },
            {
                showMe: true,
                id: 6,
                name: { en: "Escape Room", th: "กักห้อง เกมโหด" },
                poster: "http://www.majorcineplex.com/uploads/movie/2404/thumb_2404.jpg",
                director: "อดัม โรบิเทล",
                actors: "เทย์เลอร์ รัสเซลล์, เดบาร่าห์ แอน โวลล์, โลแกน มิลเลอร์",
                categories: [9, 10],
                webdetail: "detail6.html",
                ucode: "6dSKUoV0SNI",
                synopsis: `<div class="desclistsynopsis"><p></p><p>&nbsp;Escape Room เกิดขึ้นเมื่อกลุ่มคนแปลกหน้าต้องมารวมกันในห้องปริศนาที่ไร้ทางออก โดยมีกล้องวงจรปิดเฝ้าดูพวกเขาจากภายนอก วิธีเดียวที่จะออกจากห้องนี้ได้ จะต้องไขรหัสลับของห้องให้ได้ ถ้าแก้ไขรหัสไม่สำเร็จจะต้องตาย แต่หากใครเป็นผู้ชนะของเกมส์นี้จะได้รับรางวัลเป็นเงินหมื่นดอลล่าร์!! แต่เรื่องราวไม่ง่ายขนาดนั้นเพราะคนที่บงการอยู่เบื้องหลังเกมส์นี้มีวัตถุประสงค์บางอย่าง?&nbsp;</p><br><p></p></div>`
            }
        ],
        seats: [
            {
                id: "F",
                seat_no: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                price: {
                    child: 120,
                    adult: 180.
                },
            },
            {
                id: "E",
                seat_no: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                price: {
                    child: 120,
                    adult: 180.
                },
            },
            {
                id: "D",
                seat_no: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                price: {
                    child: 120,
                    adult: 180.
                },
            },
            {
                id: "C",
                seat_no: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                price: {
                    child: 120,
                    adult: 180.
                },
            },
            {
                id: "B",
                seat_no: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                price: {
                    child: 120,
                    adult: 180.
                },
            },
            {
                id: "A",
                seat_no: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                price: {
                    child: 120,
                    adult: 180.
                },
            },
        ]
    },
    methods: {
        chooseCategorie: function (categorie) {
            if (categorie.id === this.check_cate) {
                this.click_count += 1;
            }
            else {
                this.click_count = 1;
                this.check_cate = categorie.id
            }
            if (this.click_count === 1) {
                for (i = 0; i < this.movies.length; i++) {
                    this.movies[i].showMe = true;
                }
                for (i = 0; i < this.movies.length; i++) {
                    if (!(this.movies[i].categories.includes(categorie.id))) {
                        this.movies[i].showMe = !this.movies[i].showMe
                    }
                }
            }
            if (this.click_count === 2) {
                for (i = 0; i < this.movies.length; i++) {
                    this.movies[i].showMe = true;
                }
                this.click_count = 0;
            }

        },
        seatSelected: function (e) {
            // console.log(e.target.parentNode);
            if (e.target.parentNode.style.color === 'red') {
                e.target.parentNode.style.color = 'wheat';
            }
            else {
                e.target.parentNode.style.color = 'red';
            }

        },

        isSelectMore: function () {
            if (Number(this.user.childNumber) > Number(this.seat_select.length)) {
                alert("You input too much");
                this.user.childNumber = Number(this.seat_select.length);
            }
        },

        calculatePrice: function () {

            let price = 0;
            for (k = 0; k < this.seat_select.length; k++) {
                for (i = 0; i < this.seats.length; i++) {
                    for (j = 0; j < this.seats[i].seat_no.length; j++) {
                        let temp = this.seats[i].id + this.seats[i].seat_no[j];
                        if (this.seat_select[k] === temp) {

                            price += this.seats[i].price.adult;
                            // this.user.price = price;
                        }
                    }
                }
            }
            price -= (this.user.childNumber * 60)
            this.user.price = price;
            return this.user.price;
        },

        persist() {
            localStorage.cineplex_select = this.cineplex_select;
            localStorage.seat_select = this.seat_select;
            localStorage.date_select = this.date_select;
            localStorage.time_select = this.time_select;

            localStorage.name = this.user.name;
            localStorage.surname = this.user.surname;
            localStorage.email = this.user.email;
            localStorage.address = this.user.address;
            localStorage.userType = this.user.userType;
            localStorage.paymentType = this.user.paymentType;
            localStorage.creditNumber = this.user.creditNumber;
            localStorage.phoneNumber = this.user.phoneNumber;
            localStorage.adultNumber = this.user.adultNumber;
            localStorage.childNumber = this.user.adultNumber;
            localStorage.price = this.user.price;
        },

    },
    //localstorage

    mounted() {
        if (localStorage.cineplex_select) {
            this.cineplex_select = localStorage.cineplex_select;
        }
        if (localStorage.seat_select) {
            this.seat_select = localStorage.seat_select;
        }
        if (localStorage.date_select) {
            this.date_select = localStorage.date_select;
        }
        if (localStorage.time_select) {
            this.time_select = localStorage.time_select;
        }
        if (localStorage.name) {
            this.user.name = localStorage.name;
        }
        if (localStorage.surname) {
            this.user.surname = localStorage.surname;
        }
        if (localStorage.email) {
            this.user.email = localStorage.email;
        }
        if (localStorage.address) {
            this.user.address = localStorage.address;
        }
        if (localStorage.userType) {
            this.user.userType = localStorage.userType;
        }
        if (localStorage.paymentType) {
            this.user.paymentType = localStorage.paymentType;
        }
        if (localStorage.creditNumber) {
            this.user.creditNumber = localStorage.creditNumber;
        }
        if (localStorage.phoneNumber) {
            this.user.phoneNumber = localStorage.phoneNumber;
        }
        if (localStorage.adultNumber) {
            this.user.adultNumber = localStorage.adultNumber;
        }
        if (localStorage.childNumber) {
            this.user.childNumber = localStorage.childNumber;
        }
        if (localStorage.price) {
            this.user.price = localStorage.price;
        }
    },
    computed: {
        searchResult() {
            return this.movies.filter(movie => {
                let searchText = this.searchText.toLowerCase()
                let isMatchTitleEn = movie.name.en.toLowerCase().includes(searchText)
                let isMatchTitleTh = movie.name.th.toLowerCase().includes(searchText)
                let isMatchContent = movie.synopsis.toLowerCase().includes(searchText)
                return isMatchTitleEn | isMatchTitleTh | isMatchTitleTh

            })
        },
        calculateType() {
            if (this.user.userType === 'both') {
                this.user.adultNumber = Number(this.seat_select.length) - Number(this.user.childNumber);
                this.calculatePrice();
                return this.user.adultNumber;
            }
            else if (this.user.userType === 'child') {
                this.user.childNumber = Number(this.seat_select.length);
                this.user.adultNumber = 0;
                this.calculatePrice();
                return this.user.childNumber;
            }
            else if (this.user.userType === 'adult') {
                this.user.childNumber = 0;
                this.user.adultNumber = Number(this.seat_select.length);
                this.calculatePrice();
                return this.user.adultNumber;
            }

        },
        findcineplexName() {
            for (i = 0; i < this.cineplexs.length; i++) {
                if (this.cineplexs[i].id === this.cineplex_select) {
                    return this.cineplexs[i].name;
                }
            }
        },
    },

})