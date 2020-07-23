let requestURL = "data/facultyresearchdevelopment.json"
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
    tabcontent.push(add1920report(reportdata.FY1920));
    tabcontent.push(add2021report(reportdata.FY2021));
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

let add1920report = function(reportdata){
    let content = '';
    content += '<p><b>Director\'s Name: </b>'+ reportdata.RecipientFirstName + ' '+ reportdata.RecipientLastName + 
    '<br><b>Director\'s Email: </b>'+ reportdata.RecipientEmail +
    '<br><b>Reporting Period: </b>July 1, 2019 to June 30, 2020';
    content += '<div id = "FY1920">';

    let ids= getIds('FY1920');
    let data = {};
    data["mission"] = reportdata.Mission1819; 
    data["vision"] = reportdata.Vision1819;
    content += addMissionAndVision(ids, data);

    ids = getIds('FY1920');
    data = {};
    data["annualBudget"] = reportdata.Q41;
    data["employeesState"] = reportdata.Q42_1_1; 
    data["employeesRF"] = reportdata.Q42_1_2; 
    data["fteState"] = reportdata.Q42_2_1; 
    data["fteRF"] = reportdata.Q42_2_2; 
    content += addAnnualBudget(ids, data);
    if( reportdata.Q51 == 'Yes')
    {
        ids = getIds('FY1920');
        data = {};
        for(var i=1; i < 7; i++ )
        {
            data['membership' + i] =  reportdata["Q52_" + i];
        }
        content += addOrganizationalMemberships(ids, data);
        ids = getIds('FY1920');
        data = {};
        for(var i=1; i < 7; i++ )
        {
            data['benifit' + i] =  reportdata["Q61_" + i];
        }
        content += addMembershipBenifits(ids, data);
    }

    for(var i = 1; i < 6; i++)
    {
        ids = getIds('FY1920');
        let goal = new Goal(1, reportdata["Goal"+i+"1819"], reportdata["Activities"+i+"1819"], 
        reportdata["Metrics"+i+"1819"], reportdata["Timeframe"+i+"1819"], reportdata["Q"+(i+7)+"2"], reportdata["Q"+(i+7)+"3"], reportdata["Q"+(i+7)+"4"]);
        content += addSmartGoal(ids, goal);
    }

    ids = getIds('FY1920');
    data = [];
    data.push(reportdata.Q83);
    data.push(reportdata.Q93);
    data.push(reportdata.Q103);
    data.push(reportdata.Q131_4);
    data.push(reportdata.Q131_5);
    data.push(reportdata.Q131_6);
    content += addTopAchievements(ids, data);

    ids = getIds('FY1920');
    data = {};
    data["opportunities"] = reportdata.Q142;
    data["challenges"] = reportdata.Q143;
    data["needs"] = reportdata.Q144;
    data["strategies"] = reportdata.Q145;
    data["suggestions"] = reportdata.Q146;
    content += addOtherThoughts(ids, data);
    content += '</div>'
    return content;
}

let add2021report = function(reportdata){
    let content = '';
    content += '<p><b>Director\'s Name: </b>'+ reportdata.RecipientFirstName + ' '+ reportdata.RecipientLastName + 
    '<br><b>Director\'s Email: </b>'+ reportdata.RecipientEmail +
    '<br><b>Reporting Period: </b>July 1, 2019 to June 30, 2020';
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

    for(var i = 6; i < 11; i++)
    {
        ids = getIds('FY2021');
        let goal = new GoalPlan(1, reportdata["Q"+i+"1"], reportdata["Q"+i+"2"], 
        reportdata["Q"+i+"3"], reportdata["Q"+i+"4"], reportdata["Q"+i+"5"], 
        reportdata["Q"+i+"6"], reportdata["Q"+i+"7"], reportdata["Q"+i+"8"]);
        content += addSmartGoalPlan('FY 19-20', ids, goal);
    }
    content += '</div>'
    return content;
}

let addMissionAndVision = function(ids, data)
{
    let misionandvision = '<h4>MISSION</h4>'+
    '<p>'+ data.mission + '</p>' +
    '<h4>VISION</h4>'+
    '<p>'+ data.vision + '</p>' ;
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Mission and Vision", misionandvision);
}

let addAnnualBudget = function(ids, data)
{
    let budgetContent = '<h4> ANNUAL BUDGET </h4>'+
    '<p>'+ data.annualBudget + '</p>' +
    '<h4> Indicate below, the number of State and RF Employees/FTEs.</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td><th class="border_bottom" width="36.5%">State</th><th class="border_bottom" width="36.5%">RF</th></tr></thead>'+
    '<tbody><tr><th class="border_right">#Employees (Headcounts)</th><td>'+ data.employeesState + '</td><td>'+
    data.employeesRF + '</td>'+'<tr><th class="border_right">#FTEs</th><td>'+ data.fteState + '</td><td>'+
    data.fteRF + '</td></tr></tbody></table>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Annual Budget", budgetContent);
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
    smartgoal += '<div class="goal"><p><b>Goal: </b>'+ goal.goal +'</p>';
    smartgoal += "<p><b>Action(s): </b>"+ goal.action +'</p>';
    smartgoal += "<p><b>Metric(s): </b>"+ goal.metric +'</p>';
    smartgoal += "<p><b>TimeFrame: </b>"+ goal.timeFrame +'</p></div>';
    smartgoal += '<h4> Actions implemented</h4><p>'+ goal.actionsImplemented+'</p>';
    smartgoal += '<h4> Noteworthy Results of Assessment</h4><p>'+ goal.results+'</p>';
    smartgoal += '<h4> Changes Made/Planned</h4><p>'+ goal.changes+'</p>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "SMART Goal "+ goal.no, smartgoal);
}

let addTopAchievements = function(ids, data)
{
    let achievements = '<ul class="num-list sub-list">';
    for(var i=0; i<data.length; i++)
    {
        achievements +=  '<li>'+ data[i] +'</li>';
    }
    achievements +='</ul>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "Top 3 Achievements", achievements);
}

let addOtherThoughts = function(ids, data)
{
    let otherthoughts = '<p><b>Big Opportunities: </b>'+ data.opportunities + '</p>'+
    '<p><b>Big Challenges: </b>'+ data.challenges +'</p>'+
    '<p><b>Resource Needs: </b>'+ data.needs +'</p>'+
    '<p><b>Strategy Suggestions to Grow Research: </b>'+ data.strategies +'</p>'+
    '<p><b>Other Thoughts and Suggestions: </b>'+ data.suggestions +'</p>';
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
    smartgoal += '<div class="goalplan"><p><b>Goal: </b>'+ goal.goal +'</p>';
    smartgoal += "<p><b>Action(s): </b>"+ goal.action +'</p>';
    smartgoal += "<p><b>Metric(s): </b>"+ goal.metric +'</p>';
    smartgoal += "<p><b>TimeFrame: </b>"+ goal.timeFrame +'</p></div>';
    smartgoal += '<h4>Primary Leader on this Project</h4><p>'+ goal.primaryLeader+'</p>';
    smartgoal += '<h4>Circumstances That Could Impact Workplan</h4><p>'+ goal.circumstances+'</p>';
    smartgoal += '<h4>Most Important Collaborating Units/Offices</h4><p>'+ goal.collaborations+'</p>';
    smartgoal += '<h4>Impact on Research Excellence (Campus Strategic Priorities)</h4><p>'+ goal.impact+'</p>';
    return generateAccordionElem(1, ids.collapseId, ids.headerId, ids.parentId, ids.childId, "SMART Goal "+ goal.no, smartgoal);
}