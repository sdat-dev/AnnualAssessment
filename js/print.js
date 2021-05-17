window.onload = function () {
    localStorage.clear();
    /* Research Cneter dATA*/
    let atmosphericsciencesresearchcenter = "data/atmosphericsciencesresearchcenter.json";
    let atmosphericsciencesresearchcenter1920 = "data/atmosphericsciencesresearchcenter2019.json";
    let centerforfunctionalgenomics = "data/centerforfunctionalgenomics.json";
    let centerforfunctionalgenomics1920 = "data/centerforfunctionalgenomics2019.json";
    let centerforhumanservicesresearch= "data/centerforhumanservicesresearch.json";
    let centerforhumanservicesresearch1920= "data/centerforhumanservicesresearch2019.json";
    let centerforsocialdemographicanalysis = "data/centerforsocial&demographicanalysis.json";
    let centerforsocialdemographicanalysis1920 = "data/centerforsocial&demographicanalysis2019.json";
    let centerfortechnologyingovernment ="data/centerfortechnologyingovernment.json";
    let centerfortechnologyingovernment1920 ="data/centerfortechnologyingovernment2019.json";
    let instituteforhealththeenvironment = "data/instituteforhealth&theenvironment.json";
    let instituteforhealththeenvironment1920 = "data/instituteforhealth&theenvironment2019.json";
    let instituteforinformaticslogicsandsecuritystudies = "data/instituteforinformaticslogicsandsecuritystudies.json";
    let instituteforinformaticslogicsandsecuritystudies1920 = "data/instituteforinformaticslogicsandsecuritystudies2019.json";
    let ionbeamlaboratory = "data/ionbeamlaboratory.json";
    let ionbeamlaboratory1920 = "data/ionbeamlaboratory2019.json";
    let nysmesonet ="data/nysmesonet.json";
    let nysmesonet1920 ="data/nysmesonet2019.json";
    let rnaepitranscriptomicslab = "data/rnaepitranscriptomicslab.json";
    let rnaepitranscriptomicslab1920 = "data/rnaepitranscriptomicslab2019.json";
    /* Administrative Units*/
    let communityandeconomicdevelopment = "data/communityandeconomicdevelopment.json";
    let communityandeconomicdevelopment1920 = "data/communityandeconomicdevelopment2019.json";
    let facultyresearchdevelopment = "data/facultyresearchdevelopment.json";
    let facultyresearchdevelopment1920 = "data/facultyresearchdevelopment2019.json";
    let innovationdevelopmentandcommercialization= "data/innovationdevelopmentandcommercialization(oidc).json";
    let innovationdevelopmentandcommercialization1920= "data/innovationdevelopmentandcommercialization(oidc)2019.json";
    let regulatoryandresearchcompliance = "data/regulatoryandresearchcompliance.json";
    let regulatoryandresearchcompliance1920 = "data/regulatoryandresearchcompliance2019.json";
    let researchfoundationhumanresources ="data/researchfoundationhumanresources.json";
    let researchfoundationhumanresources1920 ="data/researchfoundationhumanresources2019.json";
    let sponsoredprogramsadministration = "data/sponsoredprogramsadministration.json";
    let sponsoredprogramsadministration1920 = "data/sponsoredprogramsadministration2019.json";
    let strategicplanningassessmentdataanalyticsandtechnology = "data/strategicplanningassessmentdataanalyticsandtechnology.json";
    let strategicplanningassessmentdataanalyticsandtechnology1920 = "data/strategicplanningassessmentdataanalyticsandtechnology2019.json";
    /* Research Cneter request*/
    const atmosphericsciencesresearchcenter_Request = axios.get(atmosphericsciencesresearchcenter);
    const atmosphericsciencesresearchcenter1920_Request = axios.get(atmosphericsciencesresearchcenter1920);
    const centerforfunctionalgenomics_Request = axios.get(centerforfunctionalgenomics);
    const centerforfunctionalgenomics1920_Request = axios.get(centerforfunctionalgenomics1920);
    const centerforhumanservicesresearch_request= axios.get(centerforhumanservicesresearch);
    const centerforhumanservicesresearch1920_request= axios.get(centerforhumanservicesresearch1920);
    const centerforsocialdemographicanalysis_request= axios.get(centerforsocialdemographicanalysis);
    const centerforsocialdemographicanalysis1920_request= axios.get(centerforsocialdemographicanalysis1920);
    const centerfortechnologyingovernment_request= axios.get(centerfortechnologyingovernment);
    const centerfortechnologyingovernment1920_request= axios.get(centerfortechnologyingovernment1920);
    const instituteforhealththeenvironment_request= axios.get(instituteforhealththeenvironment);
    const instituteforhealththeenvironment1920_request= axios.get(instituteforhealththeenvironment1920);
    const instituteforinformaticslogicsandsecuritystudies_request= axios.get(instituteforinformaticslogicsandsecuritystudies);
    const instituteforinformaticslogicsandsecuritystudies1920_request= axios.get(instituteforinformaticslogicsandsecuritystudies1920);
    const ionbeamlaboratory_request= axios.get(ionbeamlaboratory);
    const ionbeamlaboratory1920_request= axios.get(ionbeamlaboratory1920);
    const nysmesonet_request= axios.get(nysmesonet);
    const nysmesonet1920_request= axios.get(nysmesonet1920);
    const rnaepitranscriptomicslab_request= axios.get(rnaepitranscriptomicslab);
    const rnaepitranscriptomicslab1920_request= axios.get(rnaepitranscriptomicslab1920);
    /* Administrative Units request*/
    const communityandeconomicdevelopment_Request = axios.get(communityandeconomicdevelopment);
    const communityandeconomicdevelopment1920_Request = axios.get(communityandeconomicdevelopment1920);
    const facultyresearchdevelopment_Request = axios.get(facultyresearchdevelopment);
    const facultyresearchdevelopment1920_Request = axios.get(facultyresearchdevelopment1920);
    const innovationdevelopmentandcommercialization_request= axios.get(innovationdevelopmentandcommercialization);
    const innovationdevelopmentandcommercialization1920_request= axios.get(innovationdevelopmentandcommercialization1920);
    const regulatoryandresearchcompliance_request= axios.get(regulatoryandresearchcompliance);
    const regulatoryandresearchcompliance1920_request= axios.get(regulatoryandresearchcompliance1920);
    const researchfoundationhumanresources_request= axios.get(researchfoundationhumanresources);
    const researchfoundationhumanresources1920_request= axios.get(researchfoundationhumanresources1920);
    const sponsoredprogramsadministration_request= axios.get(sponsoredprogramsadministration);
    const sponsoredprogramsadministration1920_request= axios.get(sponsoredprogramsadministration1920);
    const strategicplanningassessmentdataanalyticsandtechnology_request= axios.get(strategicplanningassessmentdataanalyticsandtechnology);
    const strategicplanningassessmentdataanalyticsandtechnology1920_request= axios.get(strategicplanningassessmentdataanalyticsandtechnology1920);
    /* calls*/
    axios.all([atmosphericsciencesresearchcenter_Request,
    atmosphericsciencesresearchcenter1920_Request, 
    centerforfunctionalgenomics_Request,
    centerforfunctionalgenomics1920_Request,
    centerforhumanservicesresearch_request,
    centerforhumanservicesresearch1920_request,
    centerforsocialdemographicanalysis_request,
    centerforsocialdemographicanalysis1920_request,
    centerfortechnologyingovernment_request,
    centerfortechnologyingovernment1920_request,
    instituteforhealththeenvironment_request,
    instituteforhealththeenvironment1920_request,
    instituteforinformaticslogicsandsecuritystudies_request,
    instituteforinformaticslogicsandsecuritystudies1920_request,
    ionbeamlaboratory_request,
    ionbeamlaboratory1920_request,
    nysmesonet_request,
    nysmesonet1920_request,
    rnaepitranscriptomicslab_request,
    rnaepitranscriptomicslab1920_request,
    communityandeconomicdevelopment_Request,
    communityandeconomicdevelopment1920_Request,
    facultyresearchdevelopment_Request,
    facultyresearchdevelopment1920_Request,
    innovationdevelopmentandcommercialization_request,
    innovationdevelopmentandcommercialization1920_request,
    regulatoryandresearchcompliance_request,
    regulatoryandresearchcompliance1920_request,
    researchfoundationhumanresources_request,
    researchfoundationhumanresources1920_request,
    sponsoredprogramsadministration_request,
    sponsoredprogramsadministration1920_request,
    strategicplanningassessmentdataanalyticsandtechnology_request,
    strategicplanningassessmentdataanalyticsandtechnology1920_request
    ]).then(axios.spread((...responses) => {
    const atmosphericsciencesresearchcenter_Reponses = responses[0];
    const atmosphericsciencesresearchcenter1920_Reponses = responses[1];
    const centerforfunctionalgenomics_Reponses = responses[2];
    const centerforfunctionalgenomics1920_Reponses = responses[3];
    const centerforhumanservicesresearch_Reponses = responses[4];
    const centerforhumanservicesresearch1920_Reponses = responses[5];
    const centerforsocialdemographicanalysis_response = responses[6];
    const centerforsocialdemographicanalysis1920_response = responses[7];
    const centerfortechnologyingovernment_response = responses[8];
    const centerfortechnologyingovernment1920_response = responses[9];
    const instituteforhealththeenvironment_response = responses[10];
    const instituteforhealththeenvironment1920_response = responses[11];
    const instituteforinformaticslogicsandsecuritystudies_response = responses[12];
    const instituteforinformaticslogicsandsecuritystudies1920_response = responses[13];
    const ionbeamlaboratory_response = responses[14];
    const ionbeamlaboratory1920_response = responses[15];
    const nysmesonet_response = responses[16];
    const nysmesonet1920_response = responses[17];
    const rnaepitranscriptomicslab_response = responses[18];
    const rnaepitranscriptomicslab1920_response = responses[19];

    /* Administrative units*/
    const  communityandeconomicdevelopment_Reponses =responses[20];
    const  communityandeconomicdevelopment1920_Reponses =responses[21];
    const facultyresearchdevelopment_Reponses = responses[22];
    const facultyresearchdevelopment1920_Reponses = responses[23];
    const innovationdevelopmentandcommercialization_Reponses =responses[24];
    const innovationdevelopmentandcommercialization1920_Reponses =responses[25];
    const regulatoryandresearchcompliance_Reponses =responses[26];
    const regulatoryandresearchcompliance1920_Reponses =responses[27];
    const researchfoundationhumanresources_Reponses =responses[28];
    const researchfoundationhumanresources1920_Reponses =responses[29];
    const sponsoredprogramsadministration_Reponses =responses[30];
    const sponsoredprogramsadministration1920_Reponses =responses[31];
    const strategicplanningassessmentdataanalyticsandtechnology_Reponses =responses[32];
    const strategicplanningassessmentdataanalyticsandtechnology1920_Reponses =responses[33];

    /* end Administrative units*/
    let data = {};
    data["FY2020-2021"] = atmosphericsciencesresearchcenter_Reponses;
    data["FY2019-2020"] = atmosphericsciencesresearchcenter1920_Reponses;
    localStorage.setItem("atmosphericsciencesresearchcenter",JSON.stringify(data));
    // console.log(localStorage.getItem("atmosphericsciencesresearchcenter"));
    data = {};
    data["FY2020-2021"] = centerforfunctionalgenomics_Reponses;
    data["FY2019-2020"] = centerforfunctionalgenomics1920_Reponses;
    localStorage.setItem("centerforfunctionalgenomics",JSON.stringify(data));

    data = {};
    data["FY2020-2021"] = centerforhumanservicesresearch_Reponses;
    data["FY2019-2020"] = centerforhumanservicesresearch1920_Reponses;
    localStorage.setItem("centerforhumanservicesresearch",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = centerforsocialdemographicanalysis_response;
    data["FY2019-2020"] = centerforsocialdemographicanalysis1920_response;
    localStorage.setItem("centerforsocial&demographicanalysis",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = centerfortechnologyingovernment_response;
    data["FY2019-2020"] = centerfortechnologyingovernment1920_response;
    localStorage.setItem("centerfortechnologyingovernment",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = instituteforhealththeenvironment_response;
    data["FY2019-2020"] = instituteforhealththeenvironment1920_response;
    localStorage.setItem("instituteforhealth&theenvironment",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = instituteforinformaticslogicsandsecuritystudies_response;
    data["FY2019-2020"] = instituteforinformaticslogicsandsecuritystudies1920_response;
    localStorage.setItem("instituteforinformaticslogicsandsecuritystudies", JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = ionbeamlaboratory_response;
    data["FY2019-2020"] = ionbeamlaboratory1920_response;
    localStorage.setItem("ionbeamlaboratory",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = nysmesonet_response;
    data["FY2019-2020"] = nysmesonet1920_response;
    localStorage.setItem("nysmesonet",JSON.stringify(data));

    data = {};
    data["FY2020-2021"] = rnaepitranscriptomicslab_response;
    data["FY2019-2020"] = rnaepitranscriptomicslab1920_response;
    localStorage.setItem("rnaepitranscriptomicslab",JSON.stringify(data));

    /* Administrative units*/
    data = {};
    data["FY2020-2021"] = communityandeconomicdevelopment_Reponses;
    data["FY2019-2020"] = communityandeconomicdevelopment1920_Reponses;
    localStorage.setItem("communityandeconomicdevelopment",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = facultyresearchdevelopment_Reponses;
    data["FY2019-2020"] = facultyresearchdevelopment1920_Reponses;
    localStorage.setItem("facultyresearchdevelopment",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = innovationdevelopmentandcommercialization_Reponses;
    data["FY2019-2020"] = innovationdevelopmentandcommercialization1920_Reponses;
    localStorage.setItem("innovationdevelopmentandcommercialization(oidc)",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = regulatoryandresearchcompliance_Reponses;
    data["FY2019-2020"] = regulatoryandresearchcompliance1920_Reponses;
    localStorage.setItem("regulatoryandresearchcompliance",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = researchfoundationhumanresources_Reponses;
    data["FY2019-2020"] = researchfoundationhumanresources1920_Reponses;
    localStorage.setItem("researchfoundationhumanresources",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = sponsoredprogramsadministration_Reponses;
    data["FY2019-2020"] = sponsoredprogramsadministration1920_Reponses;
    localStorage.setItem("sponsoredprogramsadministration",JSON.stringify(data));
    
    data = {};
    data["FY2020-2021"] = strategicplanningassessmentdataanalyticsandtechnology_Reponses;
    data["FY2019-2020"] = strategicplanningassessmentdataanalyticsandtechnology1920_Reponses;
    localStorage.setItem("strategicplanningassessmentdataanalyticsandtechnology",JSON.stringify(data));
    /* end Administrative units*/
    })).catch(errors => {
    console.log(errors);
    })
}

function changePeriod(){
    var period = document.getElementById("period").value;
    var assementlable = document.getElementById("assessment-label");
    var planninglable = document.getElementById("planning-label")

    if(period == 'FY2019-2020'){
        assementlable.innerText = "Assessment (2019-2020)";
        planninglable.innerText = "Planning (2020-2021)";
    }
    else
    {
        assementlable.innerText = "Assessment (2020-2021)";
        planninglable.innerText = "Planning (2021-2022)";
    }
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', printReport);
function printReport(event) {
    event.preventDefault();
    var units = document.getElementById('units');
    var units_research = document.getElementById('units_research');
    var el = document.getElementById('type');
    var units_selected = [];
    for (let i = 1; i < units.children.length; i++) {
        let current = units.children[i].firstElementChild;
        if (current.checked == true) {
            units_selected.push(current.value);
        }
    }

    var units_research_selected = [];
    for (let j = 1; j < units_research.children.length; j++) {
        let current_units = units_research.children[j].firstElementChild;
        if (current_units.checked == true) {
            units_research_selected.push(current_units.value);
        }
    }

    var units_e1 = [];
    for (let k = 1; k < el.children.length; k++) {
        let current_units_e1 = el.children[k].firstElementChild;
        if (current_units_e1.checked == true) {
            units_e1.push(current_units_e1.value);
        }
    }

    var contenttotal = '';
    var period = document.getElementById("period").value;
    var content = '';

    for (var k = 0; k < units_e1.length; k++) {
        // Add admin units assessment
        for(var i = 0; i< units_selected.length; i++)
        {
            var data = JSON.parse(localStorage.getItem(units_selected[i]))[period].data;
            if (units_e1[k] == 'assessment') {
                if(period == 'FY2019-2020')
                {
                    content = printAdminAssessment(data.FY1920,'2019','2020');
                }
                else
                {
                    content = printAdminAssessment(data.FY2021,'2020','2021')
                }
                if (content !== '') {
                    contenttotal += content;
                }
            }
        }
        // Add research centers assessment
        for(var j = 0; j< units_research_selected.length; j++)
        {
            var data = JSON.parse(localStorage.getItem(units_research_selected[j]))[period].data;
            if (units_e1[k] == 'assessment') {
                if(period == 'FY2019-2020')
                {
                    content = printResearchAssessment(data.FY1920,'2019','2020');
                }
                else
                {
                    content = printResearchAssessment(data.FY2021,'2020','2021')
                }
                if (content !== '') {
                    contenttotal += content;
                }
            }
        }
        // Add admin units planning
        for(var i = 0; i< units_selected.length; i++)
        {
            var data = JSON.parse(localStorage.getItem(units_selected[i]))[period].data;
            if (units_e1[k] == 'planning') {
                if(period == 'FY2019-2020')
                {
                    content = printAdminPlanning(data.FY2021, '2020','2021');
                }
                else
                {
                    content = printAdminPlanning(data.FY2122, '2021','2022');
                }
                if (content !== '') {
                    contenttotal += content;
                }     
            }
        }
        // Add research centers planning
        for(var j = 0; j< units_research_selected.length; j++)
        {
            var data = JSON.parse(localStorage.getItem(units_research_selected[j]))[period].data;
            if (units_e1[k] == 'planning') {
                if(period == 'FY2019-2020')
                {
                    content = printResearchPlanning(data.FY2021,'2020','2021');
                }
                else
                {
                    content = printResearchPlanning(data.FY2122,'2021','2022');
                }
                if (content !== '') {
                    contenttotal += content;
                }
            }
        }
    }
    var win = window.open("print.html", "reportprinttemplate.html");
    win.document.write(contenttotal); // where 'html' is a variable containing your HTML
    win.document.close();
}

