"use strict";$(function(){$(".slide .icon li").not(".up,.down").mouseenter(function(){$(".slide .info").addClass("hover"),$(".slide .info li").hide(),$(".slide .info li."+$(this).attr("class")).show()}),$(".slide").mouseleave(function(){$(".slide .info").removeClass("hover")}),$("#btn").click(function(){$(".slide").toggle(),$(this).hasClass("index_cy")?($(this).removeClass("index_cy"),$(this).addClass("index_cy2")):($(this).removeClass("index_cy2"),$(this).addClass("index_cy"))})});