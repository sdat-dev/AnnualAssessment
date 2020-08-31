let requestURL = "data/instituteforinformaticslogicsandsecuritystudies.json"
let request = new XMLHttpRequest();
//getting content Element to append grants information
let maincontentContainer = document.getElementsByClassName('main-content')[0];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    let content = '';
    const reportdatajson = request.response;
    //condition for checking if browser is Internet Explorer
    let reportdata =  ((false || !!document.documentMode))? JSON.parse(reportdatajson): reportdatajson;
    let contentHeadr = document.getElementsByClassName('content-header')[0];
    contentHeadr.textContent = reportdata.ExternalReference;
    let years = ['FY 2019-20', 'FY 2020-21'];
    content += createTabNavigation(years, "year");
    let tabcontent = [];
    tabcontent.push(add2020researchreport(reportdata.FY1920));
    tabcontent.push(add2021researchreport(reportdata.FY2021));
    content += buildTabContent(years, 'year', tabcontent);
    let contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = content.trim();
    maincontentContainer.appendChild(contentElement);
}

let counter = 1;
let getIds = function(year){
    let ids = {};
    ids["parentId"] = year;
    ids["collapseId"] = "collapse" + counter;
    ids["headerId"] = "heading" + counter;
    ids["childId"] = "#";
    counter++;
    return ids;
}


/*.......Research reports .....*/



let add2020researchreport = function(reportdata){

    let content = '';

    content += '<p><b>Director\'s Name: </b>'+ reportdata.RecipientFirstName + ' '+ reportdata.RecipientLastName + 
    '<br><b>Director\'s Email: </b>'+ reportdata.RecipientEmail +
    '<br><b>Reporting Period: </b>July 1, 2019 to June 30, 2020';
    content += '<div id = "FY1920">';

    let ids= getIds('FY1920');
    let data = {};
    data["mission"] = reportdata.Q31; 
    data["vision"] = reportdata.Q32;
    content += addMissionAndVision(ids, data);

    ids = getIds('FY1920');
    data = {};
    data["annualBudget"] = reportdata.Q41;
    data["employeesState"] = reportdata.Q42_1_1; 
    data["employeesRF"] = reportdata.Q42_1_2; 
    data["fteState"] = reportdata.Q42_2_1; 
    data["fteRF"] = reportdata.Q42_2_2; 
    data["nameOfadditionalsource1"] = reportdata.Q43_1_1; 
    data["nameOfadditionalsource11"] = reportdata.Q43_1_2; 

    data["nameOfadditionalsource2"] = reportdata.Q43_2_1; 
    data["nameOfadditionalsource21"] = reportdata.Q43_2_2; 

    data["nameOfadditionalsource3"] = reportdata.Q43_3_1; 
    data["nameOfadditionalsource31"] = reportdata.Q43_3_2; 

    data["total3"] = reportdata.Q43_4_1; 
    data["total33"] = reportdata.Q43_4_2; 
    content += addResearceAnnualBudget19(ids, data);

    





    ids = getIds('FY1920');
    data = {};
   data["proposals"] = reportdata.Q51; 
    data["federalApplicationgoals"] = reportdata.Q51_1_1; 
    data["federalApplicationactual"] = reportdata.Q51_2_1; 

    data["stateApplicationgoals"] = reportdata.Q51_1_2; 
    data["stateApplicationactual"] = reportdata.Q51_2_2; 


    data["privateApplicationgoals"] = reportdata.Q51_1_3; 
    data["privateApplicationactual"] = reportdata.Q51_2_3; 


    data["proposal_total_goals"]=reportdata.Q51_1_4;
    data["proposal_total_actual"]=reportdata.Q51_2_4;

    data["awards"] = reportdata.Q52; 
    data["federalAwardsgoals"] = reportdata.Q52_1_1;
    data["federalAwardsactual"] = reportdata.Q52_2_2;

    
    
    data["stateAwardsgoals"] = reportdata.Q52_1_2; 
    data["stateAwardsactual"] = reportdata.Q52_2_2; 

    data["privateAwardsgoals"] = reportdata.Q52_1_3; 
    data["privateAwardsactual"] = reportdata.Q52_2_3; 

    data["awrds_total_goals"]=reportdata.Q52_1_4;
    data["awrds_total_actual"]=reportdata.Q52_2_4;
    
    data["largeScale"] = reportdata.Q53; 
    data["proposal_goals"] = reportdata.Q53_1_1;
    data["proposal_actual"] = reportdata.Q53_2_1;
    data["lsAwards_goals"] = reportdata.Q53_1_2; 
    data["lsAwards_actual"] = reportdata.Q53_2_2; 
    
    data["strr"] = reportdata.Q54;

    data["stProposal_goals"] = reportdata.Q54_1_1; 
    data["stProposal_actual"] = reportdata.Q54_2_1; 

    data["stAwards_goals"] = reportdata.Q54_1_2; 
    data["stAwards_actual"] = reportdata.Q54_2_2; 

    content +=adddetailedActivity(ids,data);




    //detailed research

    ids = getIds('FY1920');
    data = {};
   data["publications"] = reportdata.Q61; 
    data["booksAuthoredgoals"] = reportdata.Q61_1_1; 
    data["bookauthoredsactual"] = reportdata.Q61_1_2; 

    data["bookschaptersgoals"] = reportdata.Q61_2_1; 
    data["bookschapteractual"] = reportdata.Q61_2_2; 


    data["publicationsgoals"] = reportdata.Q61_3_1; 
    data["publicationsactual"] = reportdata.Q61_3_2; 


    data["listofpublications"]=reportdata.Q62;

    data["intellctualgoals"]=reportdata.Q63_1_1;
    data["intellctualactual"]=reportdata.Q63_1_2;

    data["patnetsgoals"]=reportdata.Q63_2_1;
    data["patentsactual"]=reportdata.Q63_2_2;
    data["patlicenesedlgoals"]=reportdata.Q63_3_1;
    data["patlicensedactual"]=reportdata.Q63_3_2;


    data["patlicgoals"]=reportdata.Q63_4_1;
    data["patlicactuals"]=reportdata.Q63_4_2;

    data["licensedexecutedgoals"]=reportdata.Q63_5_1;
    data["licensedexecutedactual"]=reportdata.Q63_5_2;

    data["licensedrevenuegoals"]=reportdata.Q63_6_1;
    data["licensedrevenueactual"]=reportdata.Q63_6_2;



    data["startupcompaniesgoals"]=reportdata.Q63_7_1;
    data["starupcomapnieseactual"]=reportdata.Q63_7_2;

    data["listofintelletual"]=reportdata.Q64;

    data["yougoaloffy19020"]=reportdata.Q65_1;
    data["actualnumbers"]=reportdata.Q65_2;


    
    data["listofkeynote"]=reportdata.Q66;

    data["otheracctiites"]=reportdata.Q66;








    content +=addresearchActivity(ids,data);

    //****** */



    
   ids = getIds('FY1920');
   data = {};
   data["educationandtraining"] = reportdata.Q71; 
    data["students_goals_undergraduate"] =reportdata.Q71_1_1;
    data["students_goals_graduate"] =reportdata.Q71_1_2;
    data["students_goals_graduate_phd"] =reportdata.Q71_1_3;
    data["students_goals_phd"] =reportdata.Q71_1_4;

    data["students_actual_undergraduate"] =reportdata.Q71_2_1;
    data["students_actual_graduate"] =reportdata.Q71_2_2;
    data["students_actual_gradaute_phd"] =reportdata.Q71_2_3;
    data["students_actual_phd"] =reportdata.Q71_2_4;

    data["nature_of_mentoring_undergradudate"] =reportdata.Q71_3_1;
    data["nature_of_mentoring_graduate"] =reportdata.Q71_3_2;
    data["nature_of_mentoring_gradaute_phd"] =reportdata.Q71_3_3;
    data["nature_of_mentoringl_phd"] =reportdata.Q71_3_4; 
   content += addEducation19(ids, data);

/*

    ids = getIds('FY1920');
    data = {};
   data["publications"] = reportdata.Q61; 
    data["books_authored_goals"] = reportdata.Q61_1_1; 
    data["books_authored_actual"] = reportdata.Q61_2_1; 

    data["bookschaptergoals"] = reportdata.Q61_2_1; 
    data["bookschapteractual"] = reportdata.Q61_2_2; 


    data["publicationsgoals"] = reportdata.Q61_3_1; 
    data["publicationsactual"] = reportdata.Q61_3_2; 

    data["publicationssummary"] = reportdata.Q62

   


   
   data["technology"] = reportdata.Q63; 
    data["Intellectual_goals"] = reportdata.Q63_1_1; 
    data["Intellectual_actual"] = reportdata.Q63_1_2; 

    data["patentsgoals"] = reportdata.Q63_2_1; 
    data["patentsractual"] = reportdata.Q63_2_2; 


    data["patentsissuedgoals"] = reportdata.Q63_3_1; 
    data["patentsissuedactual"] = reportdata.Q63_3_2; 


    data["patentlicensedgoals"] = reportdata.Q63_4_1; 
    data["patentslicenseddactual"] = reportdata.Q63_4_2; 


    data["licensedexecutedgoals"] = reportdata.Q63_5_1; 
    data["licensedexecutedactual"] = reportdata.Q63_5_2; 


    
    data["licencedrevenuegoals"] = reportdata.Q63_6_1; 
    data["licencedrevenueactual"] = reportdata.Q63_6_2; 



    data["starupcomapniesgoals"] = reportdata.Q63_7_1; 
    data["starupcompaniesactual"] = reportdata.Q63_7_2; 


    data["summary_intellectual"] = reportdata.Q64; 


   
   data["conference"] = reportdata.Q65; 
    data["goalforfy1920"] = reportdata.Q65_1_1; 
    data["actualnumbers"] = reportdata.Q65_1_2; 

    data["keynoteAddress"] = reportdata.Q66; 

  
   data["otheractivites"] = reportdata.Q67; 

   content +=adddetailedActivity_researach(ids,data);

*/
   
 














  
    
    for(var i = 6; i < 11; i++)
    {
        ids = getIds('FY1920');
        let goal = new GoalPlan(i-5, reportdata["Q"+i+"1"], reportdata["Q"+i+"2"], 
        reportdata["Q"+i+"3"], reportdata["Q"+i+"4"], reportdata["Q"+i+"5"], 
        reportdata["Q"+i+"6"], reportdata["Q"+i+"7"], reportdata["Q"+i+"8"]);
        content += addSmartGoal(ids, goal);
    }

    ids = getIds('FY1920');
    data = [];
    if(reportdata.Q81_4 != '')
        data.push(reportdata.Q81_4);
    if(reportdata.Q81_5 != '')
        data.push(reportdata.Q81_5);
    if(reportdata.Q81_6 != '')
        data.push(reportdata.Q81_6);
    
    content += addTopAchievements(ids, data);


    
    ids = getIds('FY1920');
    data = {};
    data["opportunities"] = reportdata.Q151;
    data["challenges"] = reportdata.Q152;
    data["needs"] = reportdata.Q153;
    data["strategies"] = reportdata.Q154;
    data["suggestions"] = reportdata.Q155;
    content += addOtherThoughts(ids, data);



    content += '</div>'

    
    return content;





}






let add2021researchreport = function(reportdata){

    let content = '';
    if(typeof reportdata === "undefined"){
        content = 'no content';
    }
    else{

    content += '<p><b>Director\'s Name: </b>'+ reportdata.RecipientFirstName + ' '+ reportdata.RecipientLastName + 
    '<br><b>Director\'s Email: </b>'+ reportdata.RecipientEmail +
    '<br><b>Reporting Period: </b>July 1, 2020 to June 30, 2021';
    content += '<div id = "FY2021">';

    let ids= getIds('FY2021');
    let data = {};
    data["mission"] = reportdata.Q31; 
    data["vision"] = reportdata.Q32;
    content += addMissionAndVision(ids, data);

    ids = getIds('FY2021');
    data = {};
    data["annualBudget"] = reportdata.Q41;
    data["employeesState"] = reportdata.Q42_1_1; 
    data["employeesRF"] = reportdata.Q42_1_2; 
    data["fteState"] = reportdata.Q42_2_1; 
    data["fteRF"] = reportdata.Q42_2_2; 
    content += addAnnualBudget(ids, data);



    ids = getIds('FY2021');
    data = {};
   data["proposals"] = reportdata.Q51; 
    data["federalApplication"] = reportdata.Q51_1_1; 
    data["stateApplication"] = reportdata.Q51_1_2; 
    data["privateApplication"] = reportdata.Q51_1_3; 
    data["proposal_total"]=reportdata.Q51_1_4;


    data["awards"] = reportdata.Q52; 
    data["federalAwards"] = reportdata.Q52_1_1; 
    data["stateAwards"] = reportdata.Q52_1_2; 
    data["privateAwards"] = reportdata.Q52_1_3; 
    data["awrds_total"]=reportdata.Q52_1_4;

    data["largeScale"] = reportdata.Q53; 
    data["proposal"] = reportdata.Q53_1_1; 
    data["lsAwards"] = reportdata.Q53_1_2; 
    
    data["strr"] = reportdata.Q54;
    data["stProposal"] = reportdata.Q54_1_1; 
    data["stAwards"] = reportdata.Q54_1_2; 

    data["publications"] = reportdata.Q55;
    data["booksAuthored"] = reportdata.Q55_1_1; 
    data["booksChapters"] = reportdata.Q55_1_2; 
    data["publicationsTable"] = reportdata.Q54_1_3; 


    data["technologyTransfer"] = reportdata.Q56;
    data["intellectual"] = reportdata.Q56_1_1; 
    data["patentsApplications"] = reportdata.Q56_2_1; 
    data["patentsIssued"] = reportdata.Q56_3_1; 
    data["patentsLicensed"] = reportdata.Q56_4_1; 
    data["licensedExecuted"] = reportdata.Q56_5_1; 
    data["licensedRevenue"] = reportdata.Q56_6_1;
    data["startupCompanies"] = reportdata.Q56_7_1;


    
    data["conference"] = reportdata.Q57;
    data["goals"] = reportdata.Q57_1_1; 



    data["education"] = reportdata.Q58;
    data["undergraduate"] = reportdata.Q58_1_1; 
    data["graduate_masters"] = reportdata.Q58_2_1; 
    data["graduate_phd"] = reportdata.Q58_3_1; 
    data["post"] = reportdata.Q58_4_1; 
    content +=addResearchPerformancetarget(ids,data);




   







    

    for(var i = 6; i < 11; i++)
    {
        ids = getIds('FY2021');
        let goal = new GoalPlan(i-5, reportdata["Q"+i+"1"], reportdata["Q"+i+"2"], 
        reportdata["Q"+i+"3"], reportdata["Q"+i+"4"], reportdata["Q"+i+"5"], 
        reportdata["Q"+i+"6"], reportdata["Q"+i+"7"], reportdata["Q"+i+"8"]);
        content += addSmartGoalPlan(ids, goal);
    }
    content += '</div>'

}
    return content;
}











/*......*/


let addResearchPerformancetarget =function(ids,data){
    let researchContent = '<h4> Research Performanace Target </h4>'+
    '<div class="annual-budget"><p>'+ data.proposals + '</p>' +
    '<h4> The target number are indicated below: .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your FY goals for 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Federal Applications</th>'+
    '<td>'+ data.federalApplication + '</td></tr>'+
    '<tr><th class="border_right">State Application</th><td>'+
     data.stateApplication + '</td></tr>'+
     '<tr><th class="border_right">Private Application</th><td>'+
     data.privateApplication + '</td></tr>'+
     '<tr><th class="border_right">Total</th><td>'+
     data.proposal_total + '</td></tr>'+

    '</tbody></table></div>'+
    '</br>' +
   
    '<div class="annual-budget"><p>'+ data.awards + '</p>' +
    '<h4> The target number are indicated below: .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your FY goals for 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Federal Awards</th>'+
    '<td>'+ data.federalAwards + '</td></tr>'+
    '<tr><th class="border_right">State Awards</th><td>'+
     data.stateAwards + '</td></tr>'+
     '<tr><th class="border_right">Private Awards</th><td>'+
     data.privateAwards + '</td></tr>'+
     '<tr><th class="border_right">Total</th><td>'+
     data.awrds_total + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' +
    '<div class="annual-budget"><p>'+ data.largeScale + '</p>' +
    '<h4> The target number are indicated below: .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your FY goals for 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Proposals</th>'+
    '<td>'+ data.proposal + '</td></tr>'+
    '<tr><th class="border_right">#Awards</th><td>'+
     data.lsAwards + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' +
    '<div class="annual-budget"><p>'+ data.strr + '</p>' +
    '<h4> The target number are indicated below: .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your FY goals for 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Proposals</th>'+
    '<td>'+ data.stProposal + '</td></tr>'+
    '<tr><th class="border_right">#Awards</th><td>'+
     data.stAwards + '</td></tr>'+
     '</tbody></table></div>'+
    
    '</br>' +
    '<div class="annual-budget"><p>'+ data.publications + '</p>' +
    '<h4> The target number are indicated below: .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your FY goals for 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Books-Authored/Edited</th>'+
    '<td>'+ data.booksAuthored + '</td></tr>'+
    '<tr><th class="border_right">Books Chapters - Authored/Edited </th><td>'+
     data.booksChapters + '</td></tr>'+
     '<tr><th class="border_right">Publications</th><td>'+
     data.publicationsTable + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' +

    '<div class="annual-budget"><p>'+ data.technologyTransfer + '</p>' +
    '<h4> The target number are indicated below: .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your FY goals for 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Intellectual Property Disclosures</th>'+
    '<td>'+ data.intellectual + '</td></tr>'+
    '<tr><th class="border_right">Patents Applications</th><td>'+
     data.patentsApplications + '</td></tr>'+
     '<tr><th class="border_right">Patents Isssued</th><td>'+
     data.patentsIssued + '</td></tr>'+
     '<tr><th class="border_right">Patents Licensed</th><td>'+
     data.patentsLicensed + '</td></tr>'+
     '<tr><th class="border_right">Licenses Executed</th><td>'+
     data.licensedExecuted + '</td></tr>'+
     '<tr><th class="border_right">Licenses Revenue</th><td>'+
     data.licensedRevenue + '</td></tr>'+
     '<tr><th class="border_right">Start-up Companies</th><td>'+
     data.startupCompanies + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' +

    '<div class="annual-budget"><p>'+ data.conference + '</p>' +
    '<h4> The target number are indicated below: .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your FY goals for 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Your Goal for FY 20-21</th>'+
    '<td>'+ data.goals + '</td></tr>'+
   
    '</tbody></table></div>'+
    '</br>' +

    
    '<div class="annual-budget"><p>'+ data.education + '</p>' +
    '<h4> The target number are indicated below: .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">#Students - Your FY goals for 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Undergraduate</th>'+
    '<td>'+ data.undergraduate + '</td></tr>'+
    '<tr><th class="border_right">Graduate - Master</th><td>'+
     data.graduate_masters + '</td></tr>'+
     '<tr><th class="border_right">Graduate - PhD</th><td>'+
     data.graduate_phd + '</td></tr>'+
     '<tr><th class="border_right">Postdoctoral</th><td>'+
     data.post + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' ;





    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Research Performanace Target ", researchContent);


}







let addMissionAndVision = function(ids, data)
{
    let misionandvision = '<h4>MISSION</h4>'+
    '<p class="mission">'+ data.mission + '</p>' +
    '<h4>VISION</h4>'+
    '<p class="vision">'+ data.vision + '</p>' ;
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Mission and Vision", misionandvision);
}

let addAnnualBudget = function(ids, data)
{
    let budgetContent = '<h4> ANNUAL BUDGET </h4>'+
    '<div class="annual-budget"><p>'+ data.annualBudget + '</p>' +
    '<h4> Indicate below, the number of State and RF Employees/FTEs.</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td><th class="border_bottom" width="36.5%">State</th><th class="border_bottom" width="36.5%">RF</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Employees (Headcounts)</th><td>'+ data.employeesState + '</td><td>'+
    data.employeesRF + '</td></tr>'+'<tr><th class="border_right">#FTEs</th><td>'+ data.fteState + '</td><td>'+
    data.fteRF + '</td></tr></tbody></table></div>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Annual Budget", budgetContent);
}


let addResearceAnnualBudget19 =  function(ids,data){

let financialbudgetContent = '<h4> ANNUAL BUDGET </h4>'+
'<div class="annual-budget"><p>'+ data.annualBudget + '</p>' +
'<h4> Indicate below, the number of State and RF Employees/FTEs.</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">State</th><th class="border_bottom" width="36.5%">RF</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">#Employees (Headcounts)</th><td>'+ data.employeesState + '</td><td>'+
data.employeesRF + '</td></tr>'+
'<tr><th class="border_right">#FTEs</th><td>'+ data.fteState + '</td><td>'+
data.fteRF + '</td></tr>'+
'</tbody></table></div>' +


'<div class="annual-budget"><p>'+  + '</p>' +
'<h4> Indicate below, the source of other revenue generated</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">Name of Additional Source 1 </th><td>'+ data.nameOfadditionalsource1 + '</td><td>'+
data.nameOfadditionalsource11 + '</td></tr>'+
'<tr><th class="border_right">Name of Additional Source 2</th><td>'+ data.nameOfadditionalsource2 + '</td><td>'+
data.nameOfadditionalsource21 + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Name of Additional Source 3 </th><td>'+ data.nameOfadditionalsource3 + '</td><td>'+
data.nameOfadditionalsource31 + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Total </th><td>'+ data.total3 + '</td><td>'+
data.total33 + '</td></tr>'+
'</tbody></table></div>' ;



return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Financial Summary Budget", financialbudgetContent);
}


let adddetailedActivity = function(ids,data){

    let detailedActivity = '<h4> Proposals</h4>'+
'<div class="annual-budget"><p>' + +'</p>' +
'<h4> Indicate below, the list of research proposal submitted to extramural sponsors .</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">Federal Applications</th><td>'+ data.federalApplicationgoals + '</td><td>'+
data.federalApplicationactual + '</td></tr>'+
'<tr><th class="border_right">Private Applications</th><td>'+ data.privateApplicationgoals + '</td><td>'+
data.privateApplicationactual + '</td></tr>'+

'<tr><th class="border_right">State Applications</th><td>'+ data.stateApplicationgoals + '</td><td>'+
data.stateAwardsactual + '</td></tr>'+

'<tr><th class="border_right">Total</th><td>'+ data.proposal_total_goals + '</td><td>'+
data.proposal_total_actual + '</td></tr>'+
'</tbody></table></div>' +


'<div class="annual-budget"><p>'+  + '</p>' +
'<h4> Indicate below, the list of funded  extramural research grants </h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">Federals Awards </th><td>'+ data.federalAwardsactual + '</td><td>'+
data.federalAwardsgoals + '</td></tr>'+
'<tr><th class="border_right">State Awards </th><td>'+ data.stateAwardsgoals + '</td><td>'+
data.stateAwardsactual + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Private Awards </th><td>'+ data.privateAwardsgoals + '</td><td>'+
data.privateApplicationgoals + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Total </th><td>'+ data.awrds_total_actual + '</td><td>'+
data.awrds_total_goals + '</td></tr>'+
'</tbody></table></div>' ; +




'<div class="annual-budget"><p>'+  + '</p>' +
'<h4> Indicate below,the large scale Multi investigator proposal Awards with Multi-Institutions</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">#Proposals </th><td>'+ data.proposal_goals + '</td><td>'+
data.proposal_actual + '</td></tr>'+
'<tr><th class="border_right">#Awards </th><td>'+ data.lsAwards_goals + '</td><td>'+
data.lsAwards_actual + '</td></tr>'+
'</tbody></table></div>' ; +

'<div class="annual-budget"><p>'+  + '</p>' +
'<h4> Indicate below,the numbers of STTR/SBIR</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">#Proposals </th><td>'+ data.stProposal_goals + '</td><td>'+
data.stProposal_actual + '</td></tr>'+
'<tr><th class="border_right">#Awards </th><td>'+ data.stAwards_goals + '</td><td>'+
data.stAwards_actual + '</td></tr>'+
'</tbody></table></div>' ; 





return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Detailed Activity Report Proposal and Awards", detailedActivity);




}

/* 
let adddetailedActivity = function(ids,data){

    let detailedActivity = '<h4> Proposals</h4>'+
'<div class="annual-budget"><p>' + +'</p>' +
'<h4> Indicate below, the list of research proposal submitted to extramural sponsors .</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">Federal Applications</th><td>'+ data.federalApplicationgoals + '</td><td>'+
data.federalApplicationactual + '</td></tr>'+
'<tr><th class="border_right">Private Applications</th><td>'+ data.privateApplicationgoals + '</td><td>'+
data.privateApplicationactual + '</td></tr>'+

'<tr><th class="border_right">State Applications</th><td>'+ data.stateApplicationgoals + '</td><td>'+
data.stateAwardsactual + '</td></tr>'+

'<tr><th class="border_right">Total</th><td>'+ data.proposal_total_goals + '</td><td>'+
data.proposal_total_actual + '</td></tr>'+
'</tbody></table></div>' +


'<div class="annual-budget"><p>'+  + '</p>' +
'<h4> Indicate below, the list of funded  extramural research grants </h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">Federals Awards </th><td>'+ data.federalAwardsactual + '</td><td>'+
data.federalAwardsgoals + '</td></tr>'+
'<tr><th class="border_right">State Awards </th><td>'+ data.stateAwardsgoals + '</td><td>'+
data.stateAwardsactual + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Private Awards </th><td>'+ data.privateAwardsgoals + '</td><td>'+
data.privateApplicationgoals + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Total </th><td>'+ data.awrds_total_actual + '</td><td>'+
data.awrds_total_goals + '</td></tr>'+
'</tbody></table></div>' ; +




'<div class="annual-budget"><p>'+  + '</p>' +
'<h4> Indicate below,the large scale Multi investigator proposal Awards with Multi-Institutions</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">#Proposals </th><td>'+ data.proposal_goals + '</td><td>'+
data.proposal_actual + '</td></tr>'+
'<tr><th class="border_right">#Awards </th><td>'+ data.lsAwards_goals + '</td><td>'+
data.lsAwards_actual + '</td></tr>'+
'</tbody></table></div>' ; +

'<div class="annual-budget"><p>'+  + '</p>' +
'<h4> Indicate below,the numbers of STTR/SBIR</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">#Proposals </th><td>'+ data.stProposal_goals + '</td><td>'+
data.stProposal_actual + '</td></tr>'+
'<tr><th class="border_right">#Awards </th><td>'+ data.stAwards_goals + '</td><td>'+
data.stAwards_actual + '</td></tr>'+
'</tbody></table></div>' ; 





return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Detailed Activity Report Proposal and Awards", detailedActivity);




} */

//detailed reserarch





let addresearchActivity = function(ids,data){

    let researchActivity = '<h4> Publications </h4>'+
'<div class="annual-budget"><p>' + +'</p>' +
'<h4> Indicate below, the list of publications by center/Institute or Lab in the past FY.</h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">Books Authored/Edited </th><td>'+ data.booksAuthoredgoals + '</td><td>'+
data.bookauthoredsactual + '</td></tr>'+
'<tr><th class="border_right">Books Chapters Authored/Edited  </th><td>'+ data.bookschaptersgoals + '</td><td>'+
data.bookschapteractual + '</td></tr>'+

'<tr><th class="border_right">Publications</th><td>'+ data.publicationsgoals + '</td><td>'+
data.publicationsactual + '</td></tr>'+

'</tbody></table></div>' +

'<div class="annual-budget"><p>' +data.listofpublications +'</p>' +
 '</div>'+






'<div class="annual-budget">Technology<p>'+  + '</p>' +
'<h4> Indicate below, the numbers of Intellectual Property </h4>'+
'<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
'<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
'<tbody><tr>'+
'<th class="border_right padding_bottom padding_top">Intellectual Property Disclosures </th><td>'+ data.intellctualgoals + '</td><td>'+
data.intellctualgoals + '</td></tr>'+
'<tr><th class="border_right">Patents Applications </th><td>'+ data.patentsactual + '</td><td>'+
data.patnetsgoals + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Patents Issued  </th><td>'+ data.patlicenesedlgoals + '</td><td>'+
data.patlicenesedlgoals + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Patents Licensed </th><td>'+ data.patlicgoals+ '</td><td>'+
data.patlicactuals + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">License Executed </th><td>'+ data.licensedexecutedgoals+ '</td><td>'+
data.licensedexecutedactual + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">License Revenue </th><td>'+ data.licensedrevenuegoals+ '</td><td>'+
data.licensedrevenueactual + '</td></tr>'+
'<th class="border_right padding_bottom padding_top">Start-up Companies </th><td>'+ data.startupcompaniesgoals+ '</td><td>'+
data.starupcomapnieseactual + '</td></tr>'+
'</tbody></table></div>' ; +


'<div class="annual-budget"><p>' +data.listofintelletual +'</p>' +
 '</div>'+

 '<br/>'

 '<br/>'




'<div class="annual-budget"><p>'+  + '</p>' +
'<h4> Indicate below,the numbers of Keynote Address or Plenary Invited Presentations</h4>'+
'<table width="100%">'+
'<tbody><tr>'+
'<th class="padding_bottom padding_top">Your Goals for FY 19-20 </th><td>'+ data.yougoaloffy19020 + '</td></tr>'+
'<tr><th class="">Actual Numbers </th><td>'+ data.actualnumbers + '</td><td>'+
data.lsAwards_actual + '</td></tr>'+
'</tbody></table></div>' +
'<br/>'

'<br/>'



'<div class="annual-budget"><p>' +data.listofkeynote +'</p>' +
 '</div>'+
'<br/>'
'<br/>'


 
'<div class="annual-budget"><p>' +data.otheracctiites +'</p>' +
'</div>';









return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Detailed Activity Report Research and Scholarly Activities", researchActivity);




}


/* research end */
















/*
let adddetailedActivity_researach =function(ids,data){


    let detailedActivity_research = '<h4> Publications</h4>'+
    '<div class="annual-budget"><p>' + +'</p>' +
    '<h4> Indicate below, the publications for which the Center,Institute or Lab generated in the past FY</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
    '<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
    '<tbody><tr>'+
    '<th class="border_right padding_bottom padding_top">Books -Authored/Edited</th><td>'+ data.books_authored_goals + '</td><td>'+
    data.books_authored_actual + '</td></tr>'+
    '<tr><th class="border_right">Books Chapters -Authored/Edited </th><td>'+ data.bookschaptergoals + '</td><td>'+
    data.bookschapteractual + '</td></tr>'+
    
    '<tr><th class="border_right">Publications</th><td>'+ data.publicationsgoals + '</td><td>'+
    data.publicationsactual + '</td></tr>'+
    '</tbody></table></div>' +

    '<div class="annual-budget"><p>' +data.publicationssummary+'</p>' +
    '</div>'+
    '<h4> Technology Transfer</h4>'+
    '<div class="annual-budget"><p>' + +'</p>' +
    '<h4> Indicate below, the publications for which the Center,Institute or Lab is cited</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
    '<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
    '<tbody><tr>'+
    '<th class="border_right padding_bottom padding_top">Intellectual Property</th><td>'+ data.Intellectual_goals + '</td><td>'+
    data.Intellectual_actual + '</td></tr>'+
    '<tr><th class="border_right"> Patents Applications </th><td>'+ data.patentsgoals + '</td><td>'+
    data.patentsractual + '</td></tr>'+
    
    '<tr><th class="border_right">Patents Issued</th><td>'+ data.patentsissuedgoals + '</td><td>'+
    data.patentsissuedactual + '</td></tr>'+


    '<tr><th class="border_right">Patents Licensed</th><td>'+ data.patentlicensedgoals + '</td><td>'+
    data.patentslicenseddactual + '</td></tr>'+

    '<tr><th class="border_right">License Executed</th><td>'+ data.licensedexecutedgoals + '</td><td>'+
    data.licensedexecutedactual + '</td></tr>'+

    '<tr><th class="border_right">License Revenue</th><td>'+ data.licencedrevenuegoals + '</td><td>'+
    data.licencedrevenueactual + '</td></tr>'+



    '<tr><th class="border_right">Start-up Companies</th><td>'+ data.starupcomapniesgoals + '</td><td>'+
    data.starupcompaniesactual + '</td></tr>'+
    '</tbody></table></div>' +
    '<br/>' +
    '<br/>' +


    '<div class="annual-budget"> List out all Intellectual property Disclosures <p>' +data.summary_intellectual+'</p>' +
    '</div>'+
    


    
    '<h4> Conference/ Seminar Presentations </h4>'+
    '<div class="annual-budget"><p>' +data.conference +'</p>' +
    '<h4> Indicate below, the numbers of KeyNote Address </h4>'+
    '<table width="100%">'+
    '<tbody><tr>'+
    '<th class="border_right padding_bottom padding_top">Your Goal for FY 19-20</th><td>'+ data.goalforfy1920 + '</td>'
    '<tr><th class="border_right"> Actual Numbers </th><td>'+ data.actualnumbers + '</td><td>'+

    '</tbody></table></div>' 



    '<div class="annual-budget"> List out all Keynote Address  <p>' +data.keynoteAddress+'</p>' +
    '</div>'+

    '<div class="annual-budget"> Other Activities <p>' +data.otheractivites+'</p>' ;
    '</div>';



    


    
    
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId,
         "Detailed Activity Report Research and Scholarly Activities", detailedActivity_research);
    
    

}*/








let addEducation19 = function(ids, data)
{
    let eduContent = '<h4> Education & Training </h4>'+
    '<div class="annual-budget"><p>'+  + '</p>' +
    '<h4> Indicate the Number of University Undergraduate & Graduate Student  .</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td><th class="border_bottom" width="36.5%">Undergrdaute</th>'+
    '<th class="border_bottom" width="36.5%">Graduate - Master </th>'+
    '<th class="border_bottom" width="36.5%">Graduate - PhD </th>'+
    '<th class="border_bottom" width="36.5%">Postdoctoral </th>'+
    '</tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Students - Your Goal for FY 19-20</th><td>'+ data.students_goals_undergraduate + '</td>'+
    '<td>'+data.students_goals_graduate+ '</td> '+    
    '<td>'+data.students_goals_graduate_phd+ '</td> '+    

    '<td>'+data.students_goals_phd+ '</td> '+    

    '</tr>'+

    '<tr><th class="border_right padding_bottom padding_top">#Students - Actual Numbers</th><td>'+ data.students_actual_undergraduate + '</td>'+
    '<td>'+data.students_actual_graduate+ '</td> '+    
    '<td>'+data.students_actual_gradaute_phd+ '</td> '+    

    '<td>'+data.students_goals_phd+ '</td> '+    

    '</tr>'+


    '<tr><th class="border_right padding_bottom padding_top"> Nature of Mentoring</th><td>'+ data.nature_of_mentoring_undergradudate + '</td>'+
    '<td>'+data.nature_of_mentoring_graduate+ '</td> '+    
    '<td>'+data.nature_of_mentoring_gradaute_phd+ '</td> '+    

    '<td>'+data.nature_of_mentoringl_phd+ '</td> '+    

    '</tr>'+






    '</tbody></table></div>' ;




    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Education And Training", eduContent);
}






let addOrganizationalMemberships = function(ids, data)
{
    let organizations = '<ul class="num-list">';
    for(var i=1; i<7; i++)
    {
        if(data['membership'+i]!= "")
            organizations +='<li>'+ data['membership'+i] +'</li>';
    }
    organizations +='</ul>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Active Organizational Memberships", organizations);
}

let addMembershipBenifits = function(ids, data)
{
    let membershipBenefit = '<ul class="num-list">';
    for(var i=1; i<7; i++)
    {
        if(data['benefit'+i]!= "")
            membershipBenefit +='<li>'+ data['benefit'+i] +'</li>';
    }
    membershipBenefit +='</ul>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Membership Benefit to the Unit", membershipBenefit);
}

let addHonors = function(collapseId, headerId, parentId, childId, data)
{
    return generateAccordionElem(1, collapseId, headerId, parentId, childId, "Staff Honors, Awards, Other", data.Q71);
}

class Goal{
    constructor(no, goal, action, metric, timeframe, actionsImplemented, results, changes){
        this.no = no;
        this.goal = goal;
        this.action = action;
        this.metric = metric;
        this.timeFrame = timeframe;
        this.actionsImplemented = actionsImplemented;
        this.results = results;
        this.changes = changes;
    }
}

let addSmartGoal = function(ids, goal)
{
    let smartgoal = '<h4>FY 19-20 SMART GOAL '+ goal.no +'</h4>';
    smartgoal += '<div class="goal"><p><b>Goal: </b>'+ (goal.goal == ''?'N/A': formatText(goal.goal)) +'</p>';
    smartgoal += "<p><b>Action(s): </b>"+ (goal.action == ''?'N/A':formatText(goal.action)) +'</p>';
    smartgoal += "<p><b>Metric(s): </b>"+ (goal.metric == ''?'N/A':formatText(goal.metric)) +'</p>';
    let time = (isNaN(goal.timeFrame) || goal.timeFrame == '') ? (goal.timeFrame == ''?'N/A':goal.timeFrame) : getDate(goal.timeFrame);
    smartgoal += "<p><b>TimeFrame: </b>"+ time +'</p></div>';
    smartgoal += '<div class="goalresult"><p><b>Actions Implemented: </b>'+ (goal.actionsImplemented == ''?'N/A':formatText(goal.actionsImplemented)) +'</p>';
    smartgoal += '<p><b>Noteworthy Results of Assessment: </b>'+ (goal.results == ''?'N/A':formatText(goal.results)) +'</p>';
    smartgoal += '<p><b>Changes Made/Planned: </b>'+ (goal.changes == ''?'N/A':formatText(goal.changes)) +'</p></div>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "SMART Goal "+ goal.no, smartgoal);
}

let formatText = function(text){
    let result = '';
    if(typeof text === "undefined"){

    }
    else{
    let paras = text.split("\n\n");
    for(var i=0; i< paras.length; i++){
        let para = paras[i];
        if(para.includes("\n") == false && para.search(/d.\t/) == -1)
        {
            result += para;
        }
        else
        {
            let lines = para.split(/\n(?=\d. |\d.\t| \d.\t|\r\n|•\t|i\.|ii\.|iii\.|iv\.|v\.)/);
            if(lines.length == 1)
            {
                result += lines[0]; 
            }
            else
            {
                for(var j =0; j< lines.length; j++)
                {
                    if(lines[j] == '') continue;
                    result += '<p>'+lines[j]+'</p>'; 
                }
            }
        }        
    }
}


    return result;
}
let addTopAchievements = function(ids, data)
{
    let achievements = '<div class="achievements">';
    for(var i=0; i<data.length; i++)
    {
        achievements += '<p><b>Achievement '+ (i+1)+': </b><p>';
        achievements += formatText(data[i]);
    }
    achievements += "</div>";
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Top 3 Achievements", achievements);
}

let addOtherThoughts = function(ids, data)
{
    let otherthoughts = '<div class="other-thoughts"><p><b>Big Opportunities: </b>'+ (data.opportunities == ''?'N/A':data.opportunities) + '</p>'+
    '<p><b>Big Challenges: </b>'+ (data.challenges == ''?'N/A':data.challenges) +'</p>'+
    '<p><b>Resource Needs: </b>'+ (data.needs == ''?'N/A':data.needs) +'</p>'+
    '<p><b>Strategy Suggestions to Grow Research: </b>'+ (data.strategies == ''?'N/A':data.strategies) +'</p>'+
    '<p><b>Other Thoughts and Suggestions: </b>'+ (data.suggestions == ''?'N/A':data.suggestions) +'</p></div>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Other Thoughts and Suggestions", otherthoughts);
}

class GoalPlan{
    constructor(no, goal, action, metric, timeframe, primaryLeader, circumstances, collaborations, impact){
        this.no = no;
        this.goal = goal;
        this.action = action;
        this.metric = metric;
        this.timeFrame = timeframe;
        this.primaryLeader = primaryLeader;
        this.circumstances = circumstances;
        this.collaborations = collaborations;
        this.impact = impact;
    }
}

let addSmartGoalPlan = function(ids, goal)
{
    let smartgoal = '<h4>FY 20-21 SMART GOAL '+ goal.no +'</h4>';
    smartgoal += '<p><b>Goal: </b>'+ (goal.goal == ''?'N/A':goal.goal) +'</p>';
    smartgoal += "<p><b>Action(s): </b>"+ (goal.action == ''?'N/A':goal.action) +'</p>';
    smartgoal += "<p><b>Metric(s): </b>"+ (goal.metric == ''?'N/A':goal.metric) +'</p>';
    let time = (isNaN(goal.timeFrame) || goal.timeFrame == '') ? (goal.timeFrame == ''?'N/A':goal.timeFrame) : getDate(goal.timeFrame);
    smartgoal += "<p><b>TimeFrame: </b>"+ time +'</p>';
    smartgoal += '<p><b>Primary Leader on this Project: </b>'+ (goal.primaryLeader == ''?'N/A':goal.primaryLeader) +'</p>';
    smartgoal += '<p><b>Circumstances That Could Impact Workplan: </b>'+ (goal.circumstances == ''?'N/A':goal.circumstances) +'</p>';
    smartgoal += '<p><b>Most Important Collaborating Units/Offices: </b>'+ (goal.collaborations == ''?'N/A':goal.collaborations) +'</p>';
    smartgoal += '<p><b>Impact on Research Excellence (Campus Strategic Priorities): </b>'+ (goal.impact == ''?'N/A':goal.impact) +'</p>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "SMART Goal "+ goal.no, smartgoal);
}