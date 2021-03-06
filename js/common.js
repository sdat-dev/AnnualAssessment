let sidemenuItems = [{"item":"HOME","link":"home.html"},{"item":"ANNUAL ASSESSMENTS","link":"annualassessments.html"},{"item":"ADMINISTRATIVE UNIT REPORTS","link":"#","subItems":[{"item":"Community and Economic Development","link":"communityandeconomicdevelopment.html"},{"item":"Faculty Research Development","link":"facultyresearchdevelopment.html"},{"item":"Innovation Development and Commercialization (OIDC)","link":"innovationdevelopmentandcommercialization(oidc).html"},{"item":"Institutes, Centers, & Specialized Labs (ICL)","link":"institutescenters&specializedlabs(icl).html"},{"item":"Institutes, Centers, and Specialized Labs (ICL)","link":"institutescentersandspecializedlabs(icl).html"},{"item":"Regulatory and Research Compliance","link":"regulatoryandresearchcompliance.html"},{"item":"Research Foundation Human Resources","link":"researchfoundationhumanresources.html"},{"item":"Sponsored Programs Administration","link":"sponsoredprogramsadministration.html"},{"item":"Strategic Planning, Assessment, Data Analytics, and Technology","link":"strategicplanningassessmentdataanalyticsandtechnology.html"}]},{"item":"RESEARCH UNIT REPORTS","link":"#","subItems":[{"item":"Atmospheric Sciences Research Center","link":"atmosphericsciencesresearchcenter.html"},{"item":"Center for Functional Genomics","link":"centerforfunctionalgenomics.html"},{"item":"Center for Human Services Research","link":"centerforhumanservicesresearch.html"},{"item":"Center for Social & Demographic Analysis","link":"centerforsocial&demographicanalysis.html"},{"item":"Center for Technology in Government","link":"centerfortechnologyingovernment.html"},{"item":"Institute for Health & the Environment","link":"instituteforhealth&theenvironment.html"},{"item":"Ion Beam Laboratory","link":"ionbeamlaboratory.html"},{"item":"NYS Mesonet","link":"nysmesonet.html"},{"item":"RNA Epitranscriptomics Lab","link":"rnaepitranscriptomicslab.html"}]},{"item":"STEPS TO COMPLETION","link":"steps-to-completion.html"},{"item":"BENEFITS","link":"benifits.html"},{"item":"PRINT REPORTS","link":"print.html"},{"item":"QUESTIONS?","link":"questions.html"}]
//SideMenu Start
//What evet written  before '//SideMenu Start' will be relace with sidemenuItems in automation scripts
let addsidemenu = function(page){
    let sidemenu = document.getElementById('navigation-bar');

    for(let i = 0; i < sidemenuItems.length; i++){
        let item = sidemenuItems[i];
        var addsubmenu = false;
        if(item.hasOwnProperty('subItems')){
            let subitems = item.subItems;
            subitems.forEach(element => {
                if(element.item == page)
                {
                    addsubmenu = true;
                    return;
                }
            });
        }
        if( addsubmenu == false)
        {
            let link = '';
            if(item.hasOwnProperty('subItems'))
            {
                link = item.subItems[0].link;
            } 
            else
            {
                link = item.link;
            }

            let menuItem = document.createElement("li");
            let menuItemContent = '<a href="' + link + '">'+ item.item +'</a>'; 
            menuItem.innerHTML = menuItemContent;
            menuItem.classList.add('navigation-items');
            menuItem.classList.add('hover-highlight');
            if(page == item.item)
            {
                menuItem.setAttribute("id", "active-page");
            }
            sidemenu.appendChild(menuItem);
        }
        else
        {
            let subitems = item.subItems;
            let submenu = '<ul id="sub-navigation-bar">';
            for(var j = 0; j< subitems.length; j++)
            {
                if(j == 0)
                {
                    submenu +='<li class="first-sub-navigation-item hover-highlight"';
                    if(page == subitems[j].item)
                    {
                        submenu += ' id = "active-page"';
                    }
                    submenu += '><a href="'+ subitems[j].link +'">'+ subitems[j].item +'</a></li>';
                }
                else if(j == subitems.length-1)
                {
                    submenu +='<li class="last-sub-navigation-item hover-highlight"';
                    if(page == subitems[j].item)
                    {
                        submenu += ' id = "active-page"';
                    }
                    submenu += '><a href="'+ subitems[j].link +'">'+ subitems[j].item +'</a></li>';
                }
                else
                {
                    submenu +='<li class="sub-navigation-items hover-highlight"';
                    if(page == subitems[j].item)
                    {
                        submenu += ' id = "active-page"';
                    }
                    submenu += '><a href="'+ subitems[j].link +'">'+ subitems[j].item +'</a></li>';
                }
            }
            let menuItem = document.createElement("li");
            let menuItemContent = '<a href="' + subitems[0].link + '">'+ item.item +'</a>' + submenu; 
            menuItem.innerHTML = menuItemContent;
            menuItem.setAttribute("id", "expanded-navigation-item");
            sidemenu.appendChild(menuItem);
        }
    }
}

let generateAccordionElem = function(level, collapseId, headerId, parentId, childId, header, accordionContent){
    var headerno = level + 2;
    let accordionElem =  '<div class = "card"><div class="card-header level'+ level +'" id="'+ headerId + '">' +
                          '<button class="btn btn-link" data-toggle="collapse" data-target="#'+ collapseId + '" aria-expanded="false" aria-controls="' + collapseId + '">'+
                            '<h'+ headerno +' class = "content-header-no-margin">' + header + '<i class="fas fa-chevron-down"></i></h'+ headerno +'></button></div>'
                        + '<div id="'+ collapseId + '" class = "collapse" aria-labelledby= "'+ headerId + '" data-parent="#'+ parentId +'"> <div class = "card-body" id="'+ childId +'">'
                        + accordionContent +'</div></div></div>';  
    return accordionElem;
}

let createTabNavigation = function(distincttabs, tabname)
{
    let navigationContent = '<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">';
    for(let i = 0; i< distincttabs.length; i++)
    {
        let buttonContent = '';
        let tabId = tabname + i.toString();
        if(i == 0)
        {
            buttonContent = '<a class="nav-link active" id="pills-'+ tabId +'-tab" data-toggle="pill" href="#pills-'+ tabId +'" role="tab" aria-controls="pills-'+ tabId +'" aria-selected="true">'+ distincttabs[i] +'</a>';
        }
        else
        {
            buttonContent = '<a class="nav-link" id="pills-'+ tabId +'-tab" data-toggle="pill" href="#pills-'+ tabId +'" role="tab" aria-controls="pills-'+ tabId +'" aria-selected="true">'+ distincttabs[i] +'</a>';
        }
       
        let linkElement = '<li class="nav-item">' + buttonContent + '</li>';
        navigationContent = navigationContent + linkElement;
    }
    navigationContent += '</ul>';
    return navigationContent;
}

let buildTabContent = function(distincttabs, tabname, tabContent){
    let content = '<div class="tab-content" id="pills-tabContent">';
    
    for(let i = 0; i< distincttabs.length; i++)
    {
        let tabId = tabname + i.toString();
        if(i == 0)
        {
            content +='<div class="tab-pane fade show active" id="pills-'+ tabId +'" role="tabpanel" aria-labelledby="pills-'+ tabId +'-tab">';
        }
        else
        {
            content +='<div class="tab-pane fade" id="pills-'+ tabId +'" role="tabpanel" aria-labelledby="pills-'+ tabId +'-tab">';
        }
        content += tabContent[i];
        content += '</div>';
    }
    content += '</div>';
    return content;
}

function getDate(serial){
    let utc_days  = Math.floor(serial - 25569);
    let utc_value = utc_days * 86400;                                        
    let date_info = new Date(utc_value * 1000);
    return (parseInt(date_info.getMonth(),10) + 1) + '/' + (parseInt(date_info.getDate(),10) + 1) + '/' + date_info.getFullYear();//, 0, minutes, seconds);
}

function printAssessmentReport(type){
    var period = document.getElementById("selectperiod").value;
    let data = JSON.parse(localStorage.getItem(period));
    let content = '';
    if(type == 'admin')
    {
        if(period == 'FY2019-2020')
        {
            content = printAdminAssessment(data.FY1920,'2019','2020');
        }
        else
        {
            content = printAdminAssessment(data.FY2021,'2020','2021')
        }
       
    }
    else
    {
        if(period == 'FY2019-2020')
        {
            content = printResearchAssessment(data.FY1920,'2019','2020');
        }
        else
        {
            content = printResearchAssessment(data.FY2021,'2020','2021')
        }
    }
    
    var win = window.open("print.html", "_blank");
    win.document.write(content); // where 'html' is a variable containing your HTML
    win.document.close(); 
}

function printPlanningReport(type){
    var period = document.getElementById("selectperiod").value;
    let data = JSON.parse(localStorage.getItem(period));
    let content = '';
    if(type == 'admin')
    {
        if(period == 'FY2019-2020')
        {
            content = printAdminPlanning(data.FY2021, '2020','2021');
        }
        else
        {
            content = printAdminPlanning(data.FY2122, '2021','2022');
        }       
    }
    else
    {
        if(period == 'FY2019-2020')
        {
            content = printResearchPlanning(data.FY2021,'2020','2021');
        }
        else
        {
            content = printResearchPlanning(data.FY2122,'2021','2022');
        }
    }
    
    var win = window.open("print.html", "_blank");
    win.document.write(content); // where 'html' is a variable containing your HTML
    win.document.close(); 
}

function changeReportPeriod(){
    var period = document.getElementById("selectperiod").value;
    let data = JSON.parse(localStorage.getItem(period));
    buildReport(data, period);
}