//settings
const settingsBtn = document.getElementById(`settingsBtn`);

settingsBtn.onclick = function() {
    document.getElementById(`settings-container`).classList.add(`opensettings`);
    document.getElementById(`screen-overlay`).classList.add(`onsetting`);
}

const overlay = document.getElementById(`screen-overlay`);

overlay.onclick = function() {
    document.getElementById(`settings-container`).classList.remove(`opensettings`);
    document.getElementById(`screen-overlay`).classList.remove(`onsetting`);
}

const crossBtn = document.getElementById(`crossBtn`);

crossBtn.onclick = function() {
    document.getElementById(`settings-container`).classList.remove(`opensettings`);
    document.getElementById(`screen-overlay`).classList.remove(`onsetting`);
}

//scroll animation

const scroll_list = [`main`, `name-container`, `subject-container`, `subject-graph`, `acadIntro-box`, `comps-container`, `smo24-container`,
    `amc24-container`, `ctf24-container`, `tree-box`, `ccaText-box`, `via-intro`, `via-grid-container`, `projects-showcase-box`
]

const container_list = [`main`, `about-target`, `acad-target`, `cca-target`, `via-target`, `proj-target`]

for (let circle of document.getElementsByClassName(`togglecircle`)) {
    circle.onclick = function() {
        if (circle.classList.contains(`toggled`)) {
            circle.classList.remove(`toggled`);
            document.getElementById(circle.id.slice(0, -6) + `bar`).classList.remove(`toggled`);

            if (circle.id == `animate-circle`) {
                for (let idname of scroll_list) {
                    document.getElementById(idname).classList.remove(`noscrollanimation`);
                }
                for (let containerid of container_list) {
                    document.getElementById(containerid).classList.remove(`showbg`);
                }
                document.getElementById(`name-container-left-text`).classList.remove(`hidetext`);
            }
        }
        else {
            circle.classList.add(`toggled`);
            document.getElementById(circle.id.slice(0, -6) + `bar`).classList.add(`toggled`);

            if (circle.id == `animate-circle`) {
                for (let idname of scroll_list) {
                    document.getElementById(idname).classList.add(`noscrollanimation`);
                }
                for (let containerid of container_list) {
                    document.getElementById(containerid).classList.add(`showbg`);
                }

                document.getElementById(`name-container-left-text`).classList.add(`hidetext`);
            }
        }
    }
}


//about() button
const startBtn = document.getElementById(`startBtn`);
startBtn.addEventListener(`click`, function() {
    const target = document.getElementById(`about-target`)
    target.scrollIntoView({ behavior: 'smooth' });
})

setTimeout(() =>  {
    startBtn.classList.remove(`start-animation`);
}
, 3000);

const aboutBtn = document.getElementById(`aboutBtn`);
aboutBtn.addEventListener(`click`, function() {
    const target = document.getElementById(`about-target`)
    target.scrollIntoView({ behavior: 'smooth' });
})

//acad() button
const acadBtn = document.getElementById(`acadBtn`);
acadBtn.addEventListener(`click`, function() {
    const target = document.getElementById(`acad-target`)
    target.scrollIntoView({ behavior: 'smooth' });
})

//cca() button
const ccaBtn = document.getElementById(`ccaBtn`);
ccaBtn.addEventListener(`click`, function() {
    const target = document.getElementById(`cca-target`)
    target.scrollIntoView({ behavior: 'smooth' });
})


//via() button
const viaBtn = document.getElementById(`viaBtn`);
viaBtn.addEventListener(`click`, function() {
    const target = document.getElementById(`via-target`)
    target.scrollIntoView({ behavior: 'smooth' });
})

//proj() button
const projBtn = document.getElementById(`projBtn`);
projBtn.addEventListener(`click`, function() {
    const target = document.getElementById(`proj-target`)
    target.scrollIntoView({ behavior: 'smooth' });
})

//loops
var subj_index = 0; //0 = comp, 1 = math, 2 = chem, 3 = econ
var can_changeSubj = true;

function trackWidthDuringAnimation(element) {
    function checkWidth() {
        const width = window.getComputedStyle(element).transform ; // or getBoundingClientRect().width

        const matrix = width.match(/matrix\((.+)\)/);
        if (matrix) {
            const values = matrix[1].split(', ');
            const scaleX = parseFloat(values[0]); // 'a' value
            
            if (scaleX == 1 && can_changeSubj) {
                subj_index = (subj_index + 1) % 4;
                can_changeSubj = false;
                changeSubj(subj_index)
            }
            else {
                requestAnimationFrame(checkWidth);
            }
        }
        
    }
    requestAnimationFrame(checkWidth);
}

const subjoverlay = document.getElementById(`subjtextcover`);

setTimeout(trackWidthDuringAnimation(subjoverlay), 800)

function changeSubj(subj_index) {
    if (subj_index == 0) {
        document.getElementById(`subjname`).textContent = "SUBJECT: H2 COMPUTING";
        setTimeout(() =>  {
            document.getElementById(`goalname`).textContent = "GOAL: A";
        }
        , 400);
        setTimeout(() => {
            can_changeSubj = true;
            trackWidthDuringAnimation(subjoverlay);
        }, 4000);
    }
    else if (subj_index == 1) {
        document.getElementById(`subjname`).textContent = "SUBJECT: H2 + H3 MATHEMATICS";
        setTimeout(() =>  {
            document.getElementById(`goalname`).textContent = "GOAL: A + MERIT";
        }
        , 400);
        setTimeout(() => {
            can_changeSubj = true;
            trackWidthDuringAnimation(subjoverlay);
        }, 4000);
    }
    else if (subj_index == 2) {
        document.getElementById(`subjname`).textContent = "SUBJECT: H2 CHEMISTRY";
        setTimeout(() =>  {
            document.getElementById(`goalname`).textContent = "GOAL: A";
        }
        , 400);
        setTimeout(() => {
            can_changeSubj = true;
            trackWidthDuringAnimation(subjoverlay);
        }, 4000);
    }
    else if (subj_index == 3) {
        document.getElementById(`subjname`).textContent = "SUBJECT: H1 ECONOMICS";
        setTimeout(() =>  {
            document.getElementById(`goalname`).textContent = "GOAL: B";
        }
        , 400);
        setTimeout(() => {
            can_changeSubj = true;
            trackWidthDuringAnimation(subjoverlay);
        }, 4000);
    }

}

//project buttons
const prevBtn = document.getElementById(`prevproj`);
const nextBtn = document.getElementById(`nextproj`);

nextBtn.onclick = function() {
    if (!nextBtn.classList.contains(`btn_deact`)) {
        for (let focus_obj of document.getElementsByClassName(`fLeft1`)) {
            focus_obj.classList.remove(`fLeft1`);
            focus_obj.classList.add(`fLeft2`);

            for (let name_obj of document.getElementsByClassName(`n-fLeft1`)) {
                name_obj.classList.remove(`n-fLeft1`);
                name_obj.classList.add(`n-fLeft2`);
            }

            nextBtn.classList.add(`btn_deact`);
        }

        for (let focus_obj of document.getElementsByClassName(`focus`)) {
            focus_obj.classList.remove(`focus`);
            focus_obj.classList.add(`fLeft1`);

            for (let name_obj of document.getElementsByClassName(`n-focus`)) {
                name_obj.classList.remove(`n-focus`);
                name_obj.classList.add(`n-fLeft1`);
            }
        }

        for (let focus_obj of document.getElementsByClassName(`fRight1`)) {
            focus_obj.classList.remove(`fRight1`);
            focus_obj.classList.add(`focus`);
            focus_obj.classList.add(`focus`, `inanimation`);
            setTimeout(() =>  {
                focus_obj.classList.remove(`inanimation`);
            } , 850);

            for (let name_obj of document.getElementsByClassName(`n-fRight1`)) {
                name_obj.classList.remove(`n-fRight1`);
                name_obj.classList.add(`n-focus`);
            }
        }

        for (let focus_obj of document.getElementsByClassName(`fRight2`)) {
            focus_obj.classList.remove(`fRight2`);
            focus_obj.classList.add(`fRight1`);

            for (let name_obj of document.getElementsByClassName(`n-fRight2`)) {
                name_obj.classList.remove(`n-fRight2`);
                name_obj.classList.add(`n-fRight1`);
            }
        }

        prevBtn.className = `prevproj`;
    }
}

prevBtn.onclick = function() {
    if (!prevBtn.classList.contains(`btn_deact`)) {
        for (let focus_obj of document.getElementsByClassName(`fRight1`)) {
            focus_obj.classList.remove(`fRight1`);
            focus_obj.classList.add(`fRight2`);

            for (let name_obj of document.getElementsByClassName(`n-fRight1`)) {
                name_obj.classList.remove(`n-fRight1`);
                name_obj.classList.add(`n-fRight2`);
            }

            prevBtn.classList.add(`btn_deact`);
        }

        for (let focus_obj of document.getElementsByClassName(`focus`)) {
            focus_obj.classList.remove(`focus`);
            focus_obj.classList.add(`fRight1`);

            for (let name_obj of document.getElementsByClassName(`n-focus`)) {
                name_obj.classList.remove(`n-focus`);
                name_obj.classList.add(`n-fRight1`);
            }
        }

        for (let focus_obj of document.getElementsByClassName(`fLeft1`)) {
            focus_obj.classList.remove(`fLeft1`);
            focus_obj.classList.add(`focus`, `inanimation`);
            setTimeout(() =>  {
                focus_obj.classList.remove(`inanimation`);
            } , 850);

            for (let name_obj of document.getElementsByClassName(`n-fLeft1`)) {
                name_obj.classList.remove(`n-fLeft1`);
                name_obj.classList.add(`n-focus`);
            }
        }

        for (let focus_obj of document.getElementsByClassName(`fLeft2`)) {
            focus_obj.classList.remove(`fLeft2`);
            focus_obj.classList.add(`fLeft1`);

            for (let name_obj of document.getElementsByClassName(`n-fLeft2`)) {
                name_obj.classList.remove(`n-fLeft2`);
                name_obj.classList.add(`n-fLeft1`);
            }
        }

        nextBtn.className = `nextproj`;
    }
}

//comp boxes
const smo24box = document.getElementById(`comp1`);
const amc24box = document.getElementById(`comp2`);
const ctf24box = document.getElementById(`comp3`);

smo24box.onmouseover = function() {
    document.getElementById(`compname1`).classList.add(`compnamehovered`);
}
smo24box.onmouseleave = function() {
    document.getElementById(`compname1`).classList.remove(`compnamehovered`);
}

smo24box.onclick = function() {
    const target = document.getElementById(`smo24-target`)
    target.scrollIntoView({ behavior: 'smooth' });
}

amc24box.onmouseover = function() {
    document.getElementById(`compname2`).classList.add(`compnamehovered`);
}

amc24box.onmouseleave = function() {
    document.getElementById(`compname2`).classList.remove(`compnamehovered`);
}

amc24box.onclick = function() {
    const target = document.getElementById(`amc24-target`)
    target.scrollIntoView({ behavior: 'smooth' });
}

ctf24box.onmouseover = function() {
    document.getElementById(`compname3`).classList.add(`compnamehovered`);
}

ctf24box.onmouseleave = function() {
    document.getElementById(`compname3`).classList.remove(`compnamehovered`);
}

ctf24box.onclick = function() {
    const target = document.getElementById(`ctf24-target`)
    target.scrollIntoView({ behavior: 'smooth' });
}

//comps sidebar
const compSq1 = document.getElementById(`compSq1`);

compSq1.onclick = function() {
    const target = document.getElementById(`smo24-target`)
    target.scrollIntoView({ behavior: 'smooth' });
}

const compSq2 = document.getElementById(`compSq2`);

compSq2.onclick = function() {
    const target = document.getElementById(`amc24-target`)
    target.scrollIntoView({ behavior: 'smooth' });
}

const compSq3 = document.getElementById(`compSq3`);

compSq3.onclick = function() {
    const target = document.getElementById(`ctf24-target`)
    target.scrollIntoView({ behavior: 'smooth' });
}

//cca buttons
const ccaroleBtn = document.getElementById(`cca-roleBtn`);
const ccaimpactBtn = document.getElementById(`cca-impactBtn`);
const ccaviaBtn = document.getElementById(`cca-viaBtn`);

const roleText = document.getElementById(`cca-role`);
const impactText = document.getElementById(`cca-impact`);
const viaText = document.getElementById(`cca-via`);

const ccaDescText = document.getElementById(`ccaText-p`);
const ccaDescImg = document.getElementById(`ccaText-img`);

ccaroleBtn.onmouseenter = function() {
    roleText.className = `ccaText-h1`;
    impactText.className = `ccaText-span`;
    viaText.className = `ccaText-span`;
    ccaDescText.textContent = `I actively participate in Eco Club by planning various activities and facilitating them. I often take the initiative to stay back after regular CCA sessions to help my Executive Committee members with cleaning the classroom up or running certain errands from our Teacher-In-Charge.

    Ever since I have joined the CCA, I have expanded my social circle, talking to other members to get them more involved and interested in the CCA.
    `;
    ccaDescImg.className = `ccaroleimg`;
}

ccaimpactBtn.onmouseenter = function() {
    roleText.className = `ccaText-span`;
    impactText.className = `ccaText-h1`;
    viaText.className = `ccaText-span`;
    ccaDescText.textContent = `Eco Club has helped me greatly in taking a step back from the fast-paced junior college life. It serves as a reminder that anything can be achieved as a team. Witnessing our ideas come to life brings me utmost satisfaction.
    
    Most importantly, this CCA has taught me the importance of sustainability and creative ways to practice it.`;
    ccaDescImg.className = `ccaimpactimg`;
}

ccaviaBtn.onmouseenter = function() {
    roleText.className = `ccaText-span`;
    impactText.className = `ccaText-span`;
    viaText.className = `ccaText-h1`;
    ccaDescText.textContent = `I have participated in many VIA activities that were hosted by the CCA’s Teacher-In-Charge. These activities include Green Bazaar and Active Learning Festival (ALF) @ Jurong Spring CC.

Green Bazaar was an in-school event mainly run by Eco Club on 8 May 2024. We spent many CCA sessions to come up with ideas for our booths, and my idea of creating a mini bowling game from recycled materials was accepted! Therefore, I was in charge of running my booth and guiding my team of members on how to run it.

ALF was run by various CCAs from JPJC on 1 December 2024, where we set up unique booths to interact with the elderly around the neighbourhood. My booth taught them how to make friendship bracelets from pre-loved clothes.

I have also facilitated VIA activities that were initiated by the Executive Committee members themselves, such as SG cares @ CCK; where we conducted engaging activities with children at Big Heart Student Care (Teck Whye Primary School) during the 2024 June and December holidays.
`;
ccaDescImg.className = `ccaviaimg`;
}

var flickStatus = true;

const flickerBtn = document.getElementById(`flickerToggle`);
flickerBtn.onclick = function() {
    if (flickStatus) {
        ccaroleBtn.classList.add(`no-flicker`);
        ccaimpactBtn.classList.add(`no-flicker`);
        ccaviaBtn.classList.add(`no-flicker`);
        flickerBtn.textContent = `Flicker: OFF`;
        flickStatus = false;
    }
    else {
        ccaroleBtn.classList.remove(`no-flicker`);
        ccaimpactBtn.classList.remove(`no-flicker`);
        ccaviaBtn.classList.remove(`no-flicker`);
        flickerBtn.textContent = `Flicker: ON`;
        flickStatus = true;
    }
}


//viabox
const viaoverlay = document.getElementById(`viacontent`);
const viaclosebutton = document.getElementById(`viaexit`);

for (let viabox of document.getElementsByClassName(`viabox`)) {
    viabox.onclick = function() {
        document.getElementById(`viadesc-title`).classList.remove(`smaller`);
        viaclosebutton.classList.add(`nofunction`);
        setTimeout(() => {
            viaclosebutton.classList.remove(`nofunction`);
        }, 3000);

        if (viabox.id != `via5` && !viabox.classList.contains(`via-notfocus`)) {
            viabox.classList.add(`via-infocus`);
            viaoverlay.classList.add(`onfocus`);

            if (viabox.id == `via1`) {
                document.getElementById(`viadesc-title`).textContent = `Green Bazaar`

                document.getElementById(`viadesc-details`).textContent = `Date: 8 May 2024

                        Venue: JPJC

                        Target: Students of JPJC
                        
                        VIA Hours: 9.5h
                        
                        Type of VIA: CCA`
            }

            if (viabox.id == `via2`) {
                document.getElementById(`viadesc-title`).textContent = `SGcares (June)`

                document.getElementById(`viadesc-details`).textContent = `Date: 5 June 2024

                        Venue: Teck Whye Primary School

                        Target: Children at Big Heart Student Care
                        
                        VIA Hours: 3h
                        
                        Type of VIA: External`
            }

            if (viabox.id == `via3`) {
                document.getElementById(`viadesc-title`).classList.add(`smaller`);
                document.getElementById(`viadesc-title`).textContent = `Active Learning Festival`

                document.getElementById(`viadesc-details`).textContent = `Date: 1 December 2024

                        Venue: Jurong Spring CC

                        Target: The elderly around the neighbourhood
                        
                        VIA Hours: 10h
                        
                        Type of VIA: CCA`
            }

            if (viabox.id == `via4`) {
                document.getElementById(`viadesc-title`).textContent = `Count Me In`

                document.getElementById(`viadesc-details`).textContent = `Date: 8 June 2024 - 31 August 2024

                        Venue: Taman Jurong CC

                        Target: Children around the neighborhood
                        
                        VIA Hours: 24h
                        
                        Type of VIA: External`
            }

            if (viabox.id == `via6`) {
                document.getElementById(`viadesc-title`).textContent = `SGcares (December)`

                document.getElementById(`viadesc-details`).textContent = `Date: 11 December 2024 & 18 December 2024

                        Venue: Teck Whye Primary School

                        Target: Children at Big Heart Student Care
                        
                        VIA Hours: 8h
                        
                        Type of VIA: External`
            }

            if (viabox.id == `via7`) {
                document.getElementById(`viadesc-title`).classList.add(`smaller`);
                document.getElementById(`viadesc-title`).textContent = `Night Study Programme`

                document.getElementById(`viadesc-details`).textContent = `Date: 11 September 2024 - 18 September 2024

                        Venue: Taman Jurong CC

                        Target: Secondary 4 Students
                        
                        VIA Hours: 7.5h
                        
                        Type of VIA: External`
            }

            if (viabox.id == `via8`) {
                document.getElementById(`viadesc-title`).textContent = `Yet to complete`

                document.getElementById(`viadesc-details`).textContent = `Date: XXX

                        Venue: XXX

                        Target: XXX
                        
                        VIA Hours: XXX
                        
                        Type of VIA: XXX`
            }

            if (viabox.id == `via9`) {
                document.getElementById(`viadesc-title`).textContent = `Yet to complete`

                document.getElementById(`viadesc-details`).textContent = `Date: XXX

                        Venue: XXX

                        Target: XXX
                        
                        VIA Hours: XXX
                        
                        Type of VIA: XXX`
            }

            for (let box of document.getElementsByClassName(`viabox`)) {
                if (viabox.id != box.id & box.id != `via5`) {
                    box.classList.add(`via-notfocus`)
                }
            }
        }
    }
}

viaclosebutton.onclick = function() {
    if (!viaclosebutton.classList.contains(`nofunction`)) {
        for (let viabox of document.getElementsByClassName(`viabox`)) {
            console.log(viabox.id)
            viabox.classList.remove(`via-notfocus`);
        }
        viaoverlay.classList.remove(`onfocus`);
        document.getElementsByClassName(`via-infocus`)[0].classList.remove(`via-infocus`);
    }
}

function checkOrientation() {
    setTimeout(() => {
        if (document.documentElement.clientWidth < 1000 & document.documentElement.clientWidth > document.documentElement.clientHeight) {
            document.getElementById(`name-container-left-text`).textContent = `Glenn Ang / JPJC / 24S11`;
            document.getElementById(`name-container-left-header`).textContent = ``;
        } else {
            document.getElementById(`name-container-left-header`).textContent = `Glenn Ang`;
            document.getElementById(`name-container-left-text`).textContent = `JPJC\n24S11`;
        }
    checkOrientation()
    }, 1000)
}

checkOrientation()