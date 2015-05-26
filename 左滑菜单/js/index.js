// JavaScript Document

jQuery(document).ready(function($) {
	
	/**
	 * 初始化侧滑菜单
	 */
	function initSlideMenu( menuWidth ){
		slideMenu = $("#slidemenu");
		container = $("#container");
		cWidth = container.width();
		cHeight = container.height();
		slideMenu.width( menuWidth );
		container.width(cWidth - menuWidth);
		slideMenu.height(cHeight);
		slideMenu.css("float", "left");
		container.css("float", "left");
	}
	
	
	/**
	 * 弹出侧滑菜单
	 */
	function showSlideMenu(){
		menuWidth = 350;
		slideMenu = $("#slidemenu");
		container = $("#container");
		width = slideMenu.width() + container.width();
		slideMenu.width( menuWidth );
		container.width(width - menuWidth );
	}
	
	/**
	 * 隐藏侧滑菜单
	 */
	function hideSlideMenu(){
		menuWidth = 50;
		slideMenu = $("#slidemenu");
		container = $("#container");
		width = slideMenu.width() + container.width();
		$("#slidemenu").width(menuWidth);
		container.width(width - menuWidth );
	}
	
	
	
	
	
	/**
	 * 初始化事件绑定
	 */
	initSlideMenu(50);	
	$("#slidemenu").bind("click", showSlideMenu);
	$("#container").bind("click", hideSlideMenu);

});