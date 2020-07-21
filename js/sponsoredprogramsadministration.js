let requestURL = "data/sponsoredprogramsadministration.json";
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

    content += '<p><b>Director\'s Name: </b>'+ reportdata.RecipientFirstName + ' '+ reportdata.RecipientLastName + 
                '<br><b>Director\'s Email: </b>'+ reportdata.RecipientEmail +
                '<br><b>Reporting Period: </b>July 1, 2019 to June 30, 2020';
    content += '<div id = "annualreport">';
    let counter = 1; 
    let collapseId = "collapse" + counter;
    let headerId = "heading" + counter;
    let childId = "#";
    counter++;
    content += addMissionAndVision(collapseId, headerId, 'annualreport', childId, reportdata);
    collapseId = "collapse" + counter;
    headerId = "heading" + counter;
    counter++;
    content += addAnnualBudget(collapseId, headerId, 'annualreport', childId, reportdata);
    if( reportdata.Q51 == 'Yes')
    {
        collapseId = "collapse" + counter;
        headerId = "heading" + counter;
        counter++;
        content += addOrganizationalMemberships(collapseId, headerId, 'annualreport', childId, reportdata);
        collapseId = "collapse" + counter;
        headerId = "heading" + counter;
        counter++;
        content += addMembershipBenifits(collapseId, headerId, 'annualreport', childId, reportdata);
    }
    collapseId = "collapse" + counter;
    headerId = "heading" + counter;
    counter++;
    let goal = new Goal(1, reportdata.Goal11920, reportdata.Activities11920, 
        reportdata.Metrics11920, reportdata.Timeframe11920, reportdata.Q82, reportdata.Q83, reportdata.Q84);
    content += addSmartGoal(collapseId, headerId, 'annualreport', childId, goal);
    collapseId = "collapse" + counter;
    headerId = "heading" + counter;
    counter++;
    goal = new Goal(2, reportdata.Goal21920, reportdata.Activities21920, 
        reportdata.Metrics21920, reportdata.Timeframe21920, reportdata.Q92, reportdata.Q93, reportdata.Q94);
    content += addSmartGoal(collapseId, headerId, 'annualreport', childId, goal);
    collapseId = "collapse" + counter;
    headerId = "heading" + counter;
    counter++;
    goal = new Goal(3, reportdata.Goal31920, reportdata.Activities31920, 
        reportdata.Metrics31920, reportdata.Timeframe31920, reportdata.Q102, reportdata.Q103, reportdata.Q104);
    content += addSmartGoal(collapseId, headerId, 'annualreport', childId, goal);
    collapseId = "collapse" + counter;
    headerId = "heading" + counter;
    counter++;
    goal = new Goal(4, reportdata.Goal41920, reportdata.Activities41920, 
        reportdata.Metrics41920, reportdata.Timeframe41920, reportdata.Q112, reportdata.Q113, reportdata.Q114);
    content += addSmartGoal(collapseId, headerId, 'annualreport', childId, goal);
    collapseId = "collapse" + counter;
    headerId = "heading" + counter;
    counter++;
    goal = new Goal(5, reportdata.Goal51920, reportdata.Activities51920, 
        reportdata.Metrics51920, reportdata.Timeframe51920, reportdata.Q122, reportdata.Q123, reportdata.Q124);
    content += addSmartGoal(collapseId, headerId, 'annualreport', childId, goal);
    collapseId = "collapse" + counter;
    headerId = "heading" + counter;
    counter++;
    content += addTopAchievements(collapseId, headerId, 'annualreport', childId, reportdata);
    collapseId = "collapse" + counter;
    headerId = "heading" + counter;
    counter++;
    content += addOtherThoughts(collapseId, headerId, 'annualreport', childId, reportdata);
    content += '</div>'
    let contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = content.trim();
    maincontentContainer.appendChild(contentElement);
}

let addMissionAndVision = function(collapseId, headerId, parentId, childId, data)
{
    let misionandvision = '<h4>MISSION</h4>'+
    '<p>'+ data.Mission1819 + '</p>' +
    '<h4>VISION</h4>'+
    '<p>'+ data.Vision1819 + '</p>' ;
    return generateAccordionElem(1, collapseId, headerId, parentId, childId, "Mission and Vision", misionandvision);
}

let addAnnualBudget = function(collapseId, headerId, parentId, childId, data)
{
    let annualBudget = '<h4> ANNUAL BUDGET </h4>'+
    '<p>'+ data.Q41 + '</p>' +
    '<h4> Indicate below, the number of State and RF Employees/FTEs.</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td><th class="border_bottom" width="36.5%">State</th><th class="border_bottom" width="36.5%">RF</th></tr></thead>'+
    '<tbody><tr><th class="border_right">#Employees (Headcounts)</th><td>'+ data.Q42_1_1 + '</td><td>'+
    data.Q42_1_2 + '</td>'+'<tr><th class="border_right">#FTEs</th><td>'+ data.Q42_2_1 + '</td><td>'+
    data.Q42_2_2 + '</td></tr></tbody></table>';
    return generateAccordionElem(1, collapseId, headerId, parentId, childId, "Annual Budget", annualBudget);
}

let addOrganizationalMemberships = function(collapseId, headerId, parentId, childId, data)
{
    let organizations = '<ul class="num-list">';
    if(data.Q52_1 != "")
    organizations +='<li>'+ data.Q52_1 +'</li>';
    if(data.Q52_2 != "")
    organizations +='<li>'+ data.Q52_2+'</li>';
    if(data.Q52_3 != "")
    organizations +='<li>'+ data.Q52_3+'</li>';
    if(data.Q52_4 != "")
    organizations +='<li>'+ data.Q52_4+'</li>';
    if(data.Q52_5 != "")
    organizations +='<li>'+ data.Q52_5+'</li>';
    if(data.Q52_6 != "")
    organizations +='<li>'+ data.Q52_6+'</li>';
    organizations +='</ul>';
    return generateAccordionElem(1, collapseId, headerId, parentId, childId, "Active Organizational Memberships", organizations);
}

let addMembershipBenifits = function(collapseId, headerId, parentId, childId, data)
{
    let membershipBenefit = '<ul class="num-list">';
    if(data.Q56_1 != "")
    membershipBenefit +='<li>'+ data.Q56_1 +'</li>';
    if(data.Q56_2 != "")
    membershipBenefit +='<li>'+ data.Q56_2+'</li>';
    if(data.Q56_3 != "")
    membershipBenefit +='<li>'+ data.Q56_3+'</li>';
    if(data.Q56_4 != "")
    membershipBenefit +='<li>'+ data.Q56_4+'</li>';
    if(data.Q56_5 != "")
    membershipBenefit +='<li>'+ data.Q56_5+'</li>';
    if(data.Q56_6 != "")
    membershipBenefit +='<li>'+ data.Q56_6+'</li>';
    membershipBenefit +='</ul>';
    return generateAccordionElem(1, collapseId, headerId, parentId, childId, "Membership Benefit to the Unit", membershipBenefit);
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

let addSmartGoal = function(collapseId, headerId, parentId, childId, goal)
{
    let smartgoal = '<h4>FY 19-20 SMART GOAL '+ goal.no +'</h4>';
    smartgoal += '<div class="goal"><p><b>Goal: </b>'+ goal.goal +'</p>';
    smartgoal += "<p><b>Action(s): </b>"+ goal.action +'</p>';
    smartgoal += "<p><b>Metric(s): </b>"+ goal.metric +'</p>';
    smartgoal += "<p><b>TimeFrame: </b>"+ goal.timeFrame +'</p></div>';
    smartgoal += '<h4> Actions implemented</h4><p>'+ goal.actionsImplemented+'</p>';
    smartgoal += '<h4> Noteworthy Results of Assessment</h4><p>'+ goal.results+'</p>';
    smartgoal += '<h4> Changes Made/Planned</h4><p>'+ goal.changes+'</p>';
    return generateAccordionElem(1, collapseId, headerId, parentId, childId, "SMART Goal "+ goal.no, smartgoal);
}

let addTopAchievements = function(collapseId, headerId, parentId, childId, data)
{
    let achievements = '<ul class="num-list sub-list">'+
    '<li>'+ data.Q132_4 +'</li>'+
    '<li>'+ data.Q132_5 +'</li>'+
    '<li>'+ data.Q132_6 +'</li></ul>';
    return generateAccordionElem(1, collapseId, headerId, parentId, childId, "Top 3 Achievements", achievements);
}

let addOtherThoughts = function(collapseId, headerId, parentId, childId, data)
{
    let otherthoughts = '<p><b>Big Opportunities: </b>'+ data.Q141 + '</p>'+
    '<p><b>Big Challenges: </b>'+ data.Q142 +'</p>'+
    '<p><b>Resource Needs: </b>'+ data.Q143 +'</p>'+
    '<p><b>Strategy Suggestions to Grow Research: </b>'+ data.Q144 +'</p>'+
    '<p><b>Other Thoughts and Suggestions: </b>'+ data.Q145 +'</p>';
    return generateAccordionElem(1, collapseId, headerId, parentId, childId, "Other Thoughts and Suggestions", otherthoughts);
}