let content = document.getElementsByClassName('content')[0];

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', printReport);
function printReport(event) {
    event.preventDefault();
    var units = document.getElementById('units');
    var units_research = document.getElementById('units_research');
    var el = document.getElementById('type');
    var units_array = [];
    for (let i = 1; i < units.children.length; i++) {
        let current = units.children[i].firstElementChild;
        if (current.checked == true) {
            units_array.push(current.value);
        }
    }


    var units_research1 = [];
    for (let j = 1; j < units_research.children.length; j++) {
        let current_units = units_research.children[j].firstElementChild;
        if (current_units.checked == true) {
            units_research1.push(current_units.value);
        }
    }

    var units_e1 = [];
    for (let k = 1; k < el.children.length; k++) {
        let current_units_e1 = el.children[k].firstElementChild;
        if (current_units_e1.checked == true) {
            units_e1.push(current_units_e1.value);
        }
    }

    var total = [];
    var contenttotal = '';
    var content_admin_2019_2020 = '';
    var content_research_2019_2020 = '';
    var content_admin_2020_2021 = '';
    var content_research_2020_2021 = '';
    total = units_array.concat(units_research1);
    //total = total.concat(units.el);

    for (var p = 0; p <= units_e1.length; p++) {
        // console.log(units_e1[p]);
        for (var l = 0; l < total.length; l++) {
            var splithtml = total[l].split(".");
            // console.log(splithtml);
            var data = localStorage.getItem(splithtml[0]);
            // console.log(data);
            if (units_e1[p] == '19-20') {
                if (splithtml[0] === "communityandeconomicdevelopment" ||
                    splithtml[0] === "facultyresearchdevelopment" ||
                    splithtml[0] === "innovationdevelopmentandcommercialization(oidc)" ||
                    splithtml[0] === "regulatoryandresearchcompliance" ||
                    splithtml[0] === "researchfoundationhumanresources" ||
                    splithtml[0] === "sponsoredprogramsadministration" ||
                    splithtml[0] === "strategicplanningassessmentdataanalyticsandtechnology") {
                    content_admin_2019_2020 = printadminhUnit19(JSON.parse(data));
                    if (content_admin_2019_2020 !== '') {
                        contenttotal += content_admin_2019_2020;
                    }
                }
                else {
                    content_research_2019_2020 = printResearchUnit(JSON.parse(data));
                    if (content_research_2019_2020 !== '')
                        contenttotal += content_research_2019_2020;
                } 
            }

            if (units_e1[p] == '20-21') {
                if (splithtml[0] === "communityandeconomicdevelopment" ||
                    splithtml[0] === "facultyresearchdevelopment" ||
                    splithtml[0] === "innovationdevelopmentandcommercialization(oidc)" ||
                    splithtml[0] === "regulatoryandresearchcompliance" ||
                    splithtml[0] === "researchfoundationhumanresources" ||
                    splithtml[0] === "sponsoredprogramsadministration" ||
                    splithtml[0] === "strategicplanningassessmentdataanalyticsandtechnology") {
                    content_admin_2020_2021 = printadminhUnit20(JSON.parse(data));
                    if (content_admin_2020_2021 !== '') {
                        contenttotal += content_admin_2020_2021;
                    }
                }
                else {
                    content_research_2020_2021 = printResearchUnit2021(JSON.parse(data));
                    if (content_research_2020_2021 !== '')
                        contenttotal += content_research_2020_2021;
                }
            }
        }
    }
    var win = window.open("print.html", "reportprinttemplate.html");
    win.document.write(contenttotal); // where 'html' is a variable containing your HTML
    win.document.close();
}

