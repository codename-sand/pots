document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.first_depth > div').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            var nextSubMenu = item.nextElementSibling;
            var allSubMenus = document.querySelectorAll('ul.sub_menu');
            var allFirstDepthDivs = document.querySelectorAll('.first_depth > div');

            allSubMenus.forEach(function (menu) {
                if (menu !== nextSubMenu) {
                    menu.style.display = 'none';
                }
            });

            allFirstDepthDivs.forEach(function (div) {
                if (div !== item) {
                    div.classList.remove("active");
                }
            });

            item.classList.toggle("active");

            if (nextSubMenu.style.display === 'none' || nextSubMenu.style.display === '') {
                slideDown(nextSubMenu, 400);
            } else {
                slideUp(nextSubMenu, 400);
            }
        });
    });

    function slideDown(element, duration) {
        var height = element.scrollHeight;
        var interval = 10;
        var increment = height / (duration / interval);
        var currentHeight = 0;
        element.style.display = 'block';
        element.style.overflow = 'hidden';
        var slideDownInterval = setInterval(function () {
            currentHeight += increment;
            element.style.height = currentHeight + 'px';
            if (currentHeight >= height) {
                clearInterval(slideDownInterval);
                element.style.height = '';
            }
        }, interval);
    }

    function slideUp(element, duration) {
        var height = element.scrollHeight;
        var interval = 10;
        var decrement = height / (duration / interval);
        var currentHeight = height;
        element.style.overflow = 'hidden';
        var slideUpInterval = setInterval(function () {
            currentHeight -= decrement;
            element.style.height = currentHeight + 'px';
            if (currentHeight <= 0) {
                clearInterval(slideUpInterval);
                element.style.height = '';
                element.style.display = 'none';
            }
        }, interval);
    }


    const checkItem = document.getElementById("check");

    if (checkItem !== null || undefined) {
        checkItem.addEventListener("click", function () {
            var checkboxes = document.querySelectorAll("input[name=checked]");
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = document.getElementById("check").checked;
            });
        });
    }


    document.querySelectorAll('table.company_order tr').forEach(function (row) {
        row.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.clk_left_detail').forEach(function (detail) {
                detail.style.display = 'block';
            });
        });
    });

    // 스크롤 플러그인 적용
    // var scrollbars = document.querySelectorAll('.scrollbar-macosx');
    // scrollbars.forEach(function (scrollbar) {
    //     SimpleScrollbar.initEl(scrollbar);
    // });
});
