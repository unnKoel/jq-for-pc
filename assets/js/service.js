//移除数组中指定的项
function removeItemByArray(array, value) {
	var index = $.inArray(value, array);
	array.splice(index, 1);
	return array.join(",");
}

var Card = function (data, defaultOptions) {
	this.cardTemplate = $("<div class='position-card pull-left'></div>");
	this.cardHeader = $("<div class='card-header'></div>");
	this.cardList = $("<ul class='card-list'></ul>");

	this.cardLiArray = [];
	this.selectArray = [];


	this.init = function () {
		this.initCardHeader();
		this.initCardList(data.subPosition);
		this.bindCardEvent();

		return this.cardTemplate;
	};

	this.initCardHeader = function () {

		var cardHeaderImg = $("<div class='card-header-img'></div>");
		var cardImg = $("<img></img>").attr('src', '/img/' + data.imgName + '.png');
		cardHeaderImg.append(cardImg);
		var cardHeaderName = $("<div class='card-header-name'></div>").append(data.headerName);
		var cardHeaderEName = $("<div class='card-header-enname'></div>").append(data.headerEName);
		this.cardHeader.append(cardHeaderImg).append(cardHeaderName).append(cardHeaderEName);

		this.cardTemplate.append(this.cardHeader);
	};

	this.initCardList = function (subData) {
		for (var i = 0; i < subData.length; i++) {
			var cardLi = $("<li class='card-item'></li>"),
				cardInput = $("<input class='service-x' type='checkbox'/>"),
				cardSpan = $("<span class='pos'>" + subData[i].name + "</span>");

			cardLi.append(cardInput).append(cardSpan);
			cardLi.data("id", subData[i].id);
			cardLi.data("name", subData[i].name);
			// (function (id, name) {
			//   cardLi.on("change", function () {
			//     // alert(that.cardLiArray);
			//     alert(id);
			//   });
			// })(subData[i].id, subData[i].name);

			this.cardLiArray.push(cardLi);
			this.cardList.append(cardLi);
		}
		this.cardTemplate.append(this.cardList);
	};

	this.bindCardEvent = function () {
		var that = this;
		this.cardTemplate.on("change", "li.card-item input", function () {
			var id = $(this).parent().parent().data("id");
			var checkStatus = $(this).prop("checked");
			if (checkStatus) {
				that.selectArray.push(id);
			} else {
				removeItemByArray(that.selectArray, id);
			}

			var isCheck = that.selectArray.length != 0;
			if (!isCheck) {
				that.cardHeader.find(".card-header-img img").attr("src", "/img/" + data.imgName + ".png");
				that.cardTemplate.removeClass("position-card-check");
				that.cardTemplate.find("input[type=checkbox]").each(function () {
					$(this).next("i").css("background-image", 'url("/img/cb-normal-servicex.png")');
				})
			} else {
				that.cardHeader.find(".card-header-img img").attr("src", "/img/" + data.selectImgName + ".png");
				that.cardTemplate.addClass("position-card-check");
				that.cardTemplate.find("input[type=checkbox]").each(function () {
					if (!$(this).prop("checked")) {
						$(this).next("i").css("background-image", 'url("/img/cb-servicex.png")');
					}
				})
			}
		});

		this.cardTemplate.on("mousemove", function () {
			that.cardHeader.find(".card-header-img img").attr("src", "/img/" + data.selectImgName + ".png");
			that.cardTemplate.addClass("position-card-check");
			that.cardTemplate.find("input[type=checkbox]").each(function () {
				if (!$(this).prop("checked")) {
					$(this).next("i").css("background-image", 'url("/img/cb-servicex.png")');
				}
			})
		}).on("mouseleave", function () {
			var isCheck = that.selectArray.length != 0;
			if (!isCheck) {
				that.cardHeader.find(".card-header-img img").attr("src", "/img/" + data.imgName + ".png");
				that.cardTemplate.removeClass("position-card-check");
				that.cardTemplate.find("input[type=checkbox]").each(function () {
					$(this).next("i").css("background-image", 'url("/img/cb-normal-servicex.png")');
				})
			}
		})
	}
};
$.fn.createCard = function (data, options) {
	var defaultOptions = {
		img: ['icon-file', 'icon-hr', 'icon-finance', 'icon-supply'],
		imgSelect: ['tab-admin-manage', 'service-card-hr', 'tab-finance', 'icon-supply-white'],
		// headerName: ['行政', '人力资源', '财务', '供应链'],
		headerEnName: ['Administration', 'Human Resource', 'Finance and Accounting', 'Supply Chain']
	};

	$.extend(defaultOptions, options);

	var cardArray = [];

	for (var i = 0; i < data.length; i++) {
		if (i >= 4) return;
		var cardData = {
			imgName: defaultOptions.img[i],
			headerName: data[i].name,
			headerEName: defaultOptions.headerEnName[i],
			selectImgName: defaultOptions.imgSelect[i],
			id: data[i].id,
			subPosition: data[i].sub_positions
		};
		var card = new Card(cardData, defaultOptions);
		var cardDom = card.init();
		if (i == data.length - 1) cardDom.addClass("last");
		this.append(cardDom);
		cardArray.push(card);
	}

	return cardArray;
};

$.page({needLogin: false}).load(function (user, pageCommon) {
	var guide = function (pageFunc) {
		var $serviceWrapper = $('.service-wrapper'),
			$funcZone = $serviceWrapper.find('.func-zone'),
			$guide = $serviceWrapper.find('.guide');
		var sGuide = parseInt($.cookie('s-guide') || '0');
		if (sGuide) {
			zone2guide('2zone');
			pageFunc && typeof pageFunc === 'function' && pageFunc();
		} else {
			zone2guide('2guide');
			$guide.find('.btn-main').on('click', function () {
				$.cookie('s-guide', '1', {
					expires: 10000
				});
				zone2guide('2zone');
				pageFunc && typeof pageFunc === 'function' && pageFunc();
			})
		}

		function zone2guide(type) {
			if (type === '2zone') {
				$funcZone.removeClass('hide');
				$guide.addClass('hide');
			} else {
				$funcZone.addClass('hide');
				$guide.removeClass('hide');
			}
		}
	};

	guide(function () {
		var loading = $("#items-wrapper").loading();
		loading.show();
		var cardArray = [];
		$.ajax({
			type: "get",
			datatype: "json",
			cache: false,
			url: "/hr/service/poslist"
		}).done(function (res) {
			if (res.code == 0) {
				if (res.data != null) {
					cardArray = $("#items-wrapper").createCard(res.data);
					$.customCheckbox();
				}
				loading.hide();
			} else {

			}
		}).fail(function (res) {

		});

		$("#sub").click(function () {
			var requireData = {};
			requireData.pos_name = $.trim($("#jd").val());
			requireData.comment = $.trim($("#requirement-mark").val());
			requireData.pos_ids = "";

			for (var i = 0; i < cardArray.length; i++) {
				var select = cardArray[i].selectArray;
				if (select.length == 0) continue;
				requireData.pos_ids += select.join(",") + ",";
			}
			requireData.pos_ids = requireData.pos_ids.substring(0, (requireData.pos_ids.length - 1));

			$.ajax({
				type: "post",
				datatype: "json",
				cache: false,
				data: requireData,
				url: "/hr/service/submitreq",
				trigger: $("#sub"),
				noIdentity: 1,
				lgCallback: function () {
					pageCommon.showCenter();
					$("#sub").trigger('click');
				}
			}).done(function (res) {
				if (requireData.pos_ids == "" && requireData.pos_name == "") {
					$.popupFailure("请选择职位，或输入其他职位！", {
						name: '确定',
						className: 'btn-main',
						func: function (popup) {
							popup.close();
						}
					});
					return;
				}


				if (res.code == 0) {
					$.popupSuccess("您的需求已经提交成功！", function (popup) {
						popup.close();
						window.location.href = '/orders.html';
					});
					// $("#jd,#requirement-mark").val("");
					// $("input[type=checkbox]").each(function () {
					//     if ($(this).prop("checked")) {
					//         $(this).prop("checked", false);
					//         $(this).change();
					//     }
					// });
				} else {
					$.popupFailure(res.data || res.msg, {
						name: '确定',
						className: 'btn-main',
						func: function (popup) {
							popup.close();
						}
					});
				}
			}).fail(function (res) {

			});
		});
	});
});