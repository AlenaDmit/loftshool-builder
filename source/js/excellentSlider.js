/**
 * Created by Алёна on 27.05.2017.
 */

class SliderNum {
    constructor(val = 0){
        this.value = val;
    }
    get(){
        return this.value;
    }
    set(val){
        this.value = val;
    }
}

const excellentSlider = ()=>{
    let slider = document.querySelector(".slider__wrap#slider"),
        currentSlide = new SliderNum(parseInt(slider.getAttribute("current_slide"))),
        itemsLength = 0;
    const imgPath = "/assets/img/",
        leftList = slider.querySelector(".left>ul"),
        currentList = slider.querySelector(".right>#current_slide>ul"),
        nextList = slider.querySelector(".right>#slider_controls>#next_slide>ul"),
        btnNext = slider.querySelector(".right>#slider_controls>#next_slide"),
        btnPrevious = slider.querySelector(".right>#slider_controls>#previous_slide"),
        previousList = slider.querySelector(".right>#slider_controls>#previous_slide>ul");


    currentSlide = new Proxy(currentSlide, {
        set(target, prop, value) {
            if( !(value === (target[prop]+1)%itemsLength || value === (target[prop]-1+itemsLength)%itemsLength) )
            {throw `now currentSlide is ${target[prop]} and setting value should be ${target[prop]+1} or ${target[prop]-1} and you try to set it to ${value}`;
            }
            let isIncrease = value === (target[prop]+1)%itemsLength;
            setActiveSlide(value, target[prop], isIncrease);
            target[prop] = value;
            return true;
        }
    });
    const itemsInit = (items)=>{
        const leftListWrap = document.createDocumentFragment(),
              currentListWrap = document.createDocumentFragment(),
              nextListWrap = document.createDocumentFragment(),
              previousListWrap = document.createDocumentFragment();

        items.forEach((item)=>{
            const leftListItem = document.createElement("li"),
                  currentListItem = document.createElement("li"),
                  nextListItem = document.createElement("li"),
                  previousListItem = document.createElement("li");
            //language=HTML
            leftListItem.innerHTML += `<p>${item.title}</p>
                                       <p>${item.tags}</p>
                                       <a href=${item.link} target="_blank">Посмотреть сайт</a>`;

            const imgAttrs = `<img src=${imgPath+item.img} alt="${item.title} image" title=${item.title}/>`;
            currentListItem.innerHTML += imgAttrs;
            nextListItem.innerHTML += imgAttrs;
            previousListItem.innerHTML += imgAttrs;

            leftListWrap.appendChild(leftListItem);
            currentListWrap.appendChild(currentListItem);
            nextListWrap.appendChild(nextListItem);
            previousListWrap.appendChild(previousListItem);
        });

        leftList.appendChild(leftListWrap);
        currentList.appendChild(currentListWrap);
        nextList.appendChild(nextListWrap);
        previousList.appendChild(previousListWrap);
        setActiveSlide(currentSlide.get());

    };

    btnNext.addEventListener('click', ()=>{
        currentSlide.set(((currentSlide.get()+1)%itemsLength));
    });

    btnPrevious.addEventListener('click', ()=>{
        currentSlide.set((currentSlide.get()-1+itemsLength)%itemsLength);
    });

    const setActiveSlide = (slideNumber, prevNumber=0, isIncrease)=>{
        console.log(isIncrease);
        slider.setAttribute("current_slide", slideNumber);
        currentList.childNodes[prevNumber].classList.remove("active");
        currentList.childNodes[slideNumber].classList.add("active");
        leftList.childNodes[prevNumber].classList.remove("active");
        leftList.childNodes[slideNumber].classList.add("active");
        nextList.childNodes[(prevNumber+1)%itemsLength].classList.remove("active");
        nextList.childNodes[(slideNumber+1)%itemsLength].classList.add("active");
        previousList.childNodes[(prevNumber-1+itemsLength)%itemsLength].classList.remove("active");
        previousList.childNodes[(slideNumber-1+itemsLength)%itemsLength].classList.add("active");
    };
    fetch("/sliderItems.json")
        .then((file)=>file.json())
        .then((items)=> {
            itemsLength = items.length;
            itemsInit(items);
        } );
};

excellentSlider();
