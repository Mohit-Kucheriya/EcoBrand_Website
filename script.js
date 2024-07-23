function hoverEffect() {
    document.querySelector(".list1").addEventListener("mousemove", function () {
        document.querySelector(".hover1").style.top = "0%";
    });
    document.querySelector(".list1").addEventListener("mouseleave", function () {
        document.querySelector(".hover1").style.top = "100%";
    });

    document.querySelector(".list2").addEventListener("mousemove", function () {
        document.querySelector(".hover2").style.top = "0%";
    });
    document.querySelector(".list2").addEventListener("mouseleave", function () {
        document.querySelector(".hover2").style.top = "100%";
    });

    document.querySelector(".list3").addEventListener("mousemove", function () {
        document.querySelector(".hover3").style.top = "0%";
    });
    document.querySelector(".list3").addEventListener("mouseleave", function () {
        document.querySelector(".hover3").style.top = "100%";
    });

    document.querySelector(".list4").addEventListener("mousemove", function () {
        document.querySelector(".hover4").style.top = "0%";
    });
    document.querySelector(".list4").addEventListener("mouseleave", function () {
        document.querySelector(".hover4").style.top = "100%";
    });
}
hoverEffect()

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: (".part2"),
        start: "60% 50%",
        end: "100% 100%",
        scrub: true,
    }
})

tl.to(".tape", {
    left: "-20%"
}, "tape")
tl.to(".tape1", {
    right: "-20%"
}, "tape")