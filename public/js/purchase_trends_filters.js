// Copyright (c) 2013, Web Notes Technologies Pvt. Ltd.
// License: GNU General Public License v3. See license.txt

var get_filters = function(){
	return [
		{
			"fieldname":"period",
			"label": wn._("Period"),
			"fieldtype": "Select",
			"options": ["Monthly", "Quarterly", "Half-Yearly", "Yearly"].join("\n"),
			"default": "Monthly"
		},
		{
			"fieldname":"based_on",
			"label": wn._("Based On"),
			"fieldtype": "Select",
			"options": ["Item", "Item Group", "Supplier", "Supplier Type", "Project"].join("\n"),
			"default": "Item"
		},
		{
			"fieldname":"group_by",
			"label": wn._("Group By"),
			"fieldtype": "Select",
			"options": ["Item", "Supplier"].join("\n"),
			"default": ""
		},
		{
			"fieldname":"fiscal_year",
			"label": wn._("Fiscal Year"),
			"fieldtype": "Link",
			"options":'Fiscal Year',
			"default": sys_defaults.fiscal_year
		},
		{
			"fieldname":"company",
			"label": wn._("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default": wn.defaults.get_default("company")
		},
	];
}