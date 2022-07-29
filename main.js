let exploreBtn = document.querySelector('.title .btn'),
    HadithSection = document.querySelector('.hadith');
exploreBtn.addEventListener('click',()=>{
    HadithSection.scrollIntoView({
        behavior : "smooth"
    })
})
//ليثبت معي الشريط العلوي أثناء الانتقال للأسفال
let fixedNav = document.querySelector('.header'),
     scrollBtn = document.querySelector('.scrollBtn');
window.addEventListener("scroll",()=>{
    window.scrollY > 100 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
    window.scrollY > 500 ?  scrollBtn.classList.add('active') : scrollBtn.classList.remove('active') ;
})
scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})
//-----------------------------
//Hadith 
let hadithContainer = document.querySelector('.hadithContainer'),
    next = document.querySelector('.buttons .next'),
    prev = document.querySelector('.buttons .prev'),
    number = document.querySelector('.buttons .number');
    let hadithIndex = 0;
HadithChanger();
function HadithChanger()
{
    fetch("https://api.hadith.sutanlab.id/books/muslim?range=1-300")
    .then(response => response.json())
    .then(data =>{
        
        let Hadiths = data.data.hadiths;
        changeHadith();
        next.addEventListener('click',()=>{
            hadithIndex == 299 ? hadithIndex = 0 : hadithIndex++;
            changeHadith()
        })
        prev.addEventListener('click',()=>{
            hadithIndex == 0 ? hadithIndex = 299 : hadithIndex--;
            changeHadith()
        })
        function changeHadith()
        {
            hadithContainer.innerText = Hadiths[hadithIndex].arab;
            number.innerText = `300  -  ${hadithIndex + 1}`
        }
    })
}//---------------------------------------------------------------------
// Link Sections
let sections = document.querySelectorAll("section"),
    links = document.querySelectorAll('.header ul li');
links.forEach(link => {
    link.addEventListener('click',()=>{
        document.querySelector('.header ul li.active').classList.remove('active');
        link.classList.add('active');
        let target = link.dataset.filter;
        sections.forEach(section=>{
            if(section.classList.contains(target))
            {
                section.scrollIntoView({
                    behavior : "smooth"
                })
            }
        })
    })
})
//------------------------------------------------------------
//Surah Api
let SurahsContainer = document.querySelector('.surhasContainer');//containerمتحول من خلاله سأعرض السور داخل ال
getSurahs()
function getSurahs()
{
    fetch("http://api.alquran.cloud/v1/meta")
    .then(response => response.json())
    .then(data=>{
        let surahs = data.data.surahs.references;
        let numberOfSurahs = 114;//عدد سور القرآن
        SurahsContainer.innerHTML = "";
        for (let i = 0; i < numberOfSurahs ; i++) {
            //اشارة الموجب لأن اذا اكتفيت بالمساواة حيبدّل السور هيك لحتى يصل لسورة الناس و يكتفي فيها
            SurahsContainer.innerHTML += 
                `
                    <div class="surah">
                        <p>${surahs[i].name}</p>
                        <p>${surahs[i].englishName}</p>
                    </div>
                `
        }
        //بعد النقر على السورة و الذهاب لقراءتها
        let SurahsTitels = document.querySelectorAll('.surah');
        let popup = document.querySelector('.surah-popup'),
            AyatContainer = document.querySelector('.ayat');
        SurahsTitels.forEach((title,index)=>{
            title.addEventListener('click',()=>{
                fetch(`http://api.alquran.cloud/v1/surah/${index + 1}`) //+1 لأن المؤشر يبدأ من صفر بينما السور من واحد
                .then(response => response.json())
                .then(data=>{
                    AyatContainer.innerHTML = ""; // فارغ بعد كل عملية خروج من السورةpopupيكون الـ
                    let Ayat = data.data.ayahs;
                    Ayat.forEach(aya=>{
                        popup.classList.add('active');
                        AyatContainer.innerHTML += `
                            <p>(${aya.numberInSurah}) - ${aya.text}</p> 
                        `
                        //رقم الآية و بياناتها
                    })
                    
                })
            })
        })
        let closePopup = document.querySelector('.close-popup');//activeتفعيل زر الإغلاق بإزالة حدث الـ
        closePopup.addEventListener('click',()=>{
            popup.classList.remove('active');
        })
    })   
}
//Active SideBar
let bars = document.querySelector('.bars'),
    SideBar = document.querySelector('.header ul');
bars.addEventListener('click',()=>{
    SideBar.classList.toggle("active");
})