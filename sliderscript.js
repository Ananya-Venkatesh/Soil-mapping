const properties = ["nitrogen", "phosphorous", "pottasium", "sulphur", "zinc", "iron", "copper", "boron", "manganese", "ph", "elecCond", "oc"]

properties.forEach(element => {
    const initialSlider = document.getElementById(element)
    initialSlider.value = initialSlider.min
    const valueElement = element.concat("-slider-value")
    const initialSliderValue = document.getElementById(valueElement)
    initialSliderValue.innerHTML = initialSlider.value
});

const nitrogen_slider = document.getElementById("nitrogen");
const phosphorous_slider = document.getElementById("phosphorous");
const pottasium_slider = document.getElementById("pottasium");
const sulphur_slider = document.getElementById("sulphur");
const zinc_slider = document.getElementById("zinc");
const iron_slider = document.getElementById("iron");
const copper_slider = document.getElementById("copper");
const boron_slider = document.getElementById("boron");
const manganese_slider = document.getElementById("manganese");
const ph_slider = document.getElementById("ph");
const elecCond_slider = document.getElementById("elecCond");
const oc_slider = document.getElementById("oc");

const nitrogen_sliderValue = document.getElementById("nitrogen-slider-value");
const phosphorous_sliderValue = document.getElementById("phosphorous-slider-value");
const pottasium_sliderValue = document.getElementById("pottasium-slider-value");
const sulphur_sliderValue = document.getElementById("sulphur-slider-value");
const zinc_sliderValue = document.getElementById("zinc-slider-value");
const iron_sliderValue = document.getElementById("iron-slider-value");
const copper_sliderValue = document.getElementById("copper-slider-value");
const boron_sliderValue = document.getElementById("boron-slider-value");
const manganese_sliderValue = document.getElementById("manganese-slider-value");
const ph_sliderValue = document.getElementById("ph-slider-value");
const elecCond_sliderValue = document.getElementById("elecCond-slider-value");
const oc_sliderValue = document.getElementById("oc-slider-value");

nitrogen_slider.addEventListener("input", function () {
    var value = nitrogen_slider.value;
    nitrogen_sliderValue.innerHTML = value;
});

phosphorous_slider.addEventListener("input", function () {
    var value = phosphorous_slider.value;
    phosphorous_sliderValue.innerHTML = value;
});

pottasium_slider.addEventListener("input", function () {
    var value = pottasium_slider.value;
    pottasium_sliderValue.innerHTML = value;
});

sulphur_slider.addEventListener("input", function () {
    var value = sulphur_slider.value;
    sulphur_sliderValue.innerHTML = value;
});

zinc_slider.addEventListener("input", function () {
    var value = zinc_slider.value;
    zinc_sliderValue.innerHTML = value;
});

iron_slider.addEventListener("input", function () {
    var value = iron_slider.value;
    iron_sliderValue.innerHTML = value;
});

copper_slider.addEventListener("input", function () {
    var value = copper_slider.value;
    copper_sliderValue.innerHTML = value;
});

boron_slider.addEventListener("input", function () {
    var value = boron_slider.value;
    boron_sliderValue.innerHTML = value;
});

manganese_slider.addEventListener("input", function () {
    var value = manganese_slider.value;
    manganese_sliderValue.innerHTML = value;
});

ph_slider.addEventListener("input", function () {
    var value = ph_slider.value;
    ph_sliderValue.innerHTML = value;
});

elecCond_slider.addEventListener("input", function () {
    var value = elecCond_slider.value;
    elecCond_sliderValue.innerHTML = value;
});

oc_slider.addEventListener("input", function () {
    var value = oc_slider.value;
    oc_sliderValue.innerHTML = value;
});
