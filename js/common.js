


function reInitEvent(num){
	const entry = document.querySelector("#entry");
	console.log(num);
	if(!entry)return;

	var time = 0;

	if(num === 0){
		entry.insertAdjacentHTML("beforeend", `
			<div class="cutin">
				<div class="wrapper nflex">
					<p class="char">
						<img src="img/char${num}.png" alt="">
					</p>
					<p class="str">
						<img src="img/str${num}.png" alt="">
					</p>
				</div>
			</div>
		`);
		// スタンプ群
		const stamps = document.querySelectorAll(
			`.stamp-list .main li`
		);

		// スタンプを有効化
		stamps.forEach((stamp) => {
			stamp.classList.add("active");
			stamp.classList.add("comp");
		});

		time = 5500;

	}else{
		// イベント用HTMLを追加
		entry.insertAdjacentHTML("beforeend", `
			<div class="cutin">
				<div class="wrapper">
					<p class="char">
						<img src="img/char${num}.png" alt="">
					</p>
					<p class="str">
						<img src="img/str${num}.png" alt="">
					</p>
				</div>
			</div>
		`);
		// スタンプ
		const stamp = document.querySelector(
			`.stamp-list .main li:nth-child(${num})`
		);

		// 吹き出し
		const baloon = document.querySelector(
			`.stamp-list .baloon`
		);


		// スタンプを有効化
		stamp.classList.add("active");

		time = 3500;

	}
	// 吹き出し
	const baloon = document.querySelector(
		`.stamp-list .baloon`
	);
	// アニメーション停止
	baloon.classList.add("animation-pause");


	// 8500ms後にアニメーション停止を解除
	setTimeout(() => {
		baloon.classList.remove("animation-pause");
	}, time);
	

}

function updateEventNum(num) {

    const url = new URL(location.href);

    url.searchParams.set('event', 'reInitEvent');
    url.searchParams.set('num', num);

    if (url.href === location.href) {
        location.reload();
    } else {
        location.href = url.toString();
    }
}