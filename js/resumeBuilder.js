var resume = {
"formattedName":  "Maciek",
"formattedRole":  "Developer"
};

resume.formattedName = HTMLheaderName.replace("%data%", resume.formattedName);
resume.formattedRole = HTMLheaderRole.replace("%data%", resume.formattedRole);

$("#header").prepend(resume.formattedName);
$("#header").prepend(resume.formattedRole);

resume.prototype