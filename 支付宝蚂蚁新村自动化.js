auto.waitFor(); // 等待获取无障碍辅助权限

// 判断支付宝是否安装
if (app.getPackageName("支付宝")) {
    // 使用 app.launchApp 打开支付宝
    app.launchApp("支付宝");
    log("正在打开支付宝");

    // 等待支付宝启动
    sleep(5000); // 根据手机性能适当调整等待时间

    // 点击“首页”Tab
    var homeTab = className("android.widget.TabWidget").findOne().child(0);
    if (homeTab) {
        homeTab.click();
        log("点击首页Tab");

        // 等待一段时间，确保切换完成
        sleep(1000);

        // 点击“信息”Tab
        var infoTab = className("android.widget.TabWidget").findOne().child(3);
        if (infoTab) {
            infoTab.click();
            log("点击信息Tab");

            // 等待信息页面加载
            sleep(2000);

            // 查找“路遥知马力”文本
            var userElement = text("路遥知马力").findOne();

            // 查找“路遥知马力”文本的父层元素
            var parentElement = userElement ? userElement.parent().parent().parent().parent().parent().parent() : null;

            // 打印userElement和parentElement信息
            log("找到了用户元素：", userElement);
            log("用户元素的父层元素：", parentElement);

            if (parentElement) {
                // 找到了父层元素，尝试点击父层元素
                if (parentElement.click()) {
                    log("点击父层元素成功");
                    sleep(1000);
                    click(566, 1991); // 模拟点击其他位置，根据实际情况修改坐标
                    sleep(3000);
                    log("执行其他操作");
                    // 在这里可以添加其他操作，例如模拟点击具体消息等
                } else {
                    log("点击父层元素失败");
                }
            } else {
                // 未找到“路遥知马力”的父层元素，进行提示
                log("未找到用户：路遥知马力的父层元素");
            }
        } else {
            // 未找到“信息”Tab，进行提示
            log("未找到信息Tab");
        }
    } else {
        // 未找到“首页”Tab，进行提示
        log("未找到首页Tab");
    }
} else {
    // 未安装支付宝，进行提示
    log("手机未安装支付宝，请安装后再试！");
}

function log(msg) {
    console.log(msg);
    toast(msg);
}
