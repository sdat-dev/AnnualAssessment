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
    '<br><b>Reporting Period: </b>July 1, 2019 to June 30, 2020' + 
    '<button type="button" style="float:right; background-color: #46166b; color:white ; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 2px; margin-right: 1px;text-align: center; margin: 0 auto;"onclick="printPlanningReport(\'FY1920\')">Print</button>';
    content += '<div id = "FY1920">';

    let ids= getIds('FY1920');
    let data = {};
    data["mission"] = reportdata["1819Mission"]; 
    data["vision"] = reportdata["1819Vision"];
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

    for(var i = 8; i < 13; i++)
    {
        if(i > 10 && reportdata.Q105 === 'No')
        {
            break;
        }
        ids = getIds('FY1920');
        let no = i-7;
        let goal = new Goal(no, reportdata["1819Goal"+no], reportdata["1819Activities"+no], 
        reportdata["1819Metrics"+no], reportdata["1819Timeframe"+no], reportdata["Q"+i+"2"], reportdata["Q"+i+"3"], reportdata["Q"+i+"4"]);
        content += addSmartGoal(ids, goal);
    }

    ids = getIds('FY1920');
    data = [];
    if(reportdata.Q131_8 != '')
        data.push(reportdata.Q83);
    if(reportdata.Q131_9 != '')
        data.push(reportdata.Q93);
    if(reportdata.Q131_13 != '')
        data.push(reportdata.Q103);
    if(reportdata.Q131_11 != '')
        data.push(reportdata.Q113);
    if(reportdata.Q131_12 != '')
        data.push(reportdata.Q123);
    if(reportdata.Q132_4 != '')
        data.push(reportdata.Q132_4);
    if(reportdata.Q132_5 != '')
        data.push(reportdata.Q132_5);
    if(reportdata.Q132_6 != '')
        data.push(reportdata.Q132_6);
    content += addTopAchievements(ids, data);

    ids = getIds('FY1920');
    data = {};
    data["opportunities"] = reportdata.Q141;
    data["challenges"] = reportdata.Q142;
    data["needs"] = reportdata.Q143;
    data["strategies"] = reportdata.Q144;
    data["suggestions"] = reportdata.Q145;
    content += addOtherThoughts(ids, data);
    content += '</div>'
    return content;
}

let add2021report = function(reportdata){
    let content = '';
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

    for(var i = 6; i < 11; i++)
    {
        ids = getIds('FY2021');
        let goal = new GoalPlan(i-5, reportdata["Q"+i+"1"], reportdata["Q"+i+"2"], 
        reportdata["Q"+i+"3"], reportdata["Q"+i+"4"], reportdata["Q"+i+"5"], 
        reportdata["Q"+i+"6"], reportdata["Q"+i+"7"], reportdata["Q"+i+"8"]);
        content += addSmartGoalPlan(ids, goal);
    }
    content += '</div>'
    return content;
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