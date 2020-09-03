
function glideSlideinit() {
    let glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 4000
    })

    glide.mount();

    let glide_1 = new Glide('.glide_1', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 4000
    })

    glide_1.mount();

    let glide_2 = new Glide('.glide_2', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 4000
    })

    glide_2.mount();

    let glide_3 = new Glide('.glide_3', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 4000
    })

    glide_3.mount();

}


export default glideSlideinit;