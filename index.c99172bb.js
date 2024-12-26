
  let a = document.querySelector("body"),
    l = document.querySelector(".hamberg");



document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelectorAll("section");

    // Event listener for home links to scroll to specific sections
    document.querySelectorAll(".home-link").forEach(t => {
        t.addEventListener("click", t => {
            t.preventDefault();
            let i = t.target.getAttribute("href"),
                a = document.querySelector(i);
            e.forEach(e => {
                if (e === a) {
                    e.classList.remove("hidden");
                    e.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                        e.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                } else {
                    e.classList.add("hidden");
                }
            });
        });
    });

    let t = document.querySelector(".navbar"),
        i = document.querySelector(".hamberg1");

    if (l && t) {
        l.addEventListener("click", () => {
            l.style.visibility = "hidden";
            i.style.visibility = "visible";
            t.classList.toggle("activate");
        });
    }

    if (i) {
        i.addEventListener("click", () => {
            l.style.visibility = "visible";
            i.style.visibility = "hidden";
            t.classList.toggle("activate");
        });
    }

    if (t) {
        t.addEventListener("click", e => {
            if ("I" === e.target.id || ("home-link" === e.target.className && window.innerWidth <= 1524)) {
                t.classList.toggle("activate");
                l.style.visibility = "visible";
                i.style.visibility = "hidden";
                console.log(e.target.id, e.target.className, window.innerWidth);
            }
        });
    }

    let a = [
        { key: "Name:", value: "Prajwal P S" },
        { key: "Email:", value: "prajwalberpadka@gmail.com" },
        { key: "Phone:", value: "+91 8296080682" },
        { key: "City:", value: "Sullia, Karnataka" },
        { key: "Degree:", value: "Bachelor's" },
        { key: "Age:", value: "19" },
        { key: "Freelance:", value: "Available" }
    ],
    s = document.getElementById("profile"),
    n = 0,
    r = 0,
    c = 0;

    // Typing effect for profile details
    (function e() {
        if (n < a.length) {
            let t = a[n];
            if (r < t.key.length) {
                s.innerHTML += `<span class="key">${t.key[r]}</span>`;
                r++;
                setTimeout(e, 100);
            } else if (c < t.value.length) {
                if (c === 0) {
                    s.innerHTML += '<span class="specialchar">"</span>';
                }
                s.innerHTML += ` <span class="value">${t.value[c]}</span>`;
                c++;
                if (c === t.value.length) {
                    s.innerHTML += '<span class="specialchar">"</span>';
                }
                setTimeout(e, 100);
            } else {
                s.innerHTML += '<span class="specialchar">,</span>';
                s.innerHTML += "<br>";
                n++;
                if (n === 7) {
                    s.innerHTML += '<div class="specialchar">};</div>';
                }
                r = 0;
                c = 0;
                setTimeout(e, 1000);
            }
        }
    })();
});
//# sourceMappingURL=index.c99172bb.js.map
