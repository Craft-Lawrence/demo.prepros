$(document).ready(function() {
	$('#app').on('input', '.validator', function() {
		let el		= $(this),
			value	= +el.val(),
			max		= el.attr('max');
		
		if ( value < 1 || value > max )
			value	= '';
		el.val(value);
	});
});


new Vue({
	el: '#app',
	data: {
		devMode:			false,
		currentQuestion:	0,
		appState:			'test', // test/result

		questions: [
			{
				type:		"conformity",
				text:		"Установите соответствие между веществом и общей формулой класса, к которому оно принадлежит: к каждой позиции, обозначенной буквой, подберите соответствующую позицию, обозначенную цифрой.",
				userAnswers:['','',''],
				answer: 	{
					letters: {
						text:	'Вещество',
						answers: [
							{
								correct:	1,
								text:		"Ацетилен",
							},
							{
								correct:	2,
								text:		"Этилен",
							},
							{
								correct:	0,
								text:		"Этан",
							},
						],
					},
					numbers: {
						text:	'Общая формула',
						answers: [
							{
								text:	"CnH2n+2",
							},
							{
								text:	"CnH2n-2",
							},
							{
								text:	"CnH2n",
							},
							{
								text:	"CnH2nO",
							},
						],
					},
				},
			},
			{
				type:	"checkbox",
				text:	"Из предложенного перечня выберите два вещества, которые являются гомологами:",
				answers: [
					{
						correct: 	true,
						text:		"Уксусная кислота",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Пропанол",
						checked:	false,
					},
					{
						correct: 	true,
						text:		"Метановая кислота",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Пропан",
						checked:	false,
					},
				],
			},
			{
				type:	"checkbox",
				text:	"Из предложенного перечня выберите два вещества, которые изменяют окраску раствора перманганата калия:",
				answers: [
					{
						correct: 	true,
						text:		"Толуол",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Этан",
						checked:	false,
					},
					{
						correct: 	true,
						text:		"Этилен",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Бромпропан",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Бензол",
						checked:	false,
					},
				],
			},
			{
				type:	"checkbox",
				text:	"Из предложенного перечня выберите два вещества, которые реагируют с муравьиной кислотой:",
				answers: [
					{
						correct: 	true,
						text:		"Этанол",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Медь",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Ацетилен",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Пропан",
						checked:	false,
					},
					{
						correct: 	true,
						text:		"Аммиачный раствор оксида серебра",
						checked:	false,
					},
				],
			},
			{
				type:	"checkbox",
				text:	"Из предложенного перечня выберите два вещества, с которыми реагирует диметиламин:",
				answers: [
					{
						correct: 	false,
						text:		"KMnO4",
						checked:	false,
					},
					{
						correct: 	true,
						text:		"HCl",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"NaOH",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"KCl",
						checked:	false,
					},
					{
						correct: 	true,
						text:		"CH3Cl",
						checked:	false,
					},
				],
			},
			{
				type:		"conformity",
				text:		"Установите соответствие между названием углеводорода и продуктом, который образуется при его взаимодействии с перманганатом калия.",
				userAnswers:['','',''],
				answer: 	{
					letters: {
						text:	'Название вещества',
						answers: [
							{
								correct:	5,
								text:		"Бутен-2",
							},
							{
								correct:	0,
								text:		"Пропан",
							},
							{
								correct:	4,
								text:		"Гексин-1",
							},
							{
								correct:	4,
								text:		"Ацетилен",
							},
						],
					},
					numbers: {
						text:	'Продукты реакции',
						answers: [
							{
								text:	"Не реагирует",
							},
							{
								text:	"Пропановая кислота",
							},
							{
								text:	"Ацетон",
							},
							{
								text:	"Этаналь",
							},
							{
								text:	"Углекислый газ",
							},
							{
								text:	"Уксусная кислота",
							},
						],
					},
				},
			},
			{
				type:		"conformity",
				text:		"Установите соответствие между реагирующими веществами и органическим продуктом, который образуется при взаимодействии этих веществ.",
				userAnswers:['','',''],
				answer: 	{
					letters: {
						text:	'Реагирующие вещества',
						answers: [
							{
								correct:	3,
								text:		"Пропеновая кислота и хлор",
							},
							{
								correct:	2,
								text:		"Пропанон и водород",
							},
							{
								correct:	0,
								text:		"Диэтиловый эфир и хлороводород",
							},
						],
					},
					numbers: {
						text:	'Общая формула',
						answers: [
							{
								text:	"Этанол",
							},
							{
								text:	"Пропанол-1",
							},
							{
								text:	"Пропанол-2",
							},
							{
								text:	"2,3-дихлорпропановая кислота",
							},
							{
								text:	"2,2-дихлорпропановая кислота",
							},
						],
					},
				},
			},
			{
				type:	"checkbox",
				text:	"Задана следующая схема превращений веществ:<br><img src=\"img/question8.jpg\"><br>Определите, какие из указанных веществ являются веществами X и Y.",
				answers: [
					{
						correct: 	true,
						text:		"Ацетилен",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Бензол",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Винилацетилен",
						checked:	false,
					},
					{
						correct: 	true,
						text:		"Метан",
						checked:	false,
					},
					{
						correct: 	false,
						text:		"Пропан",
						checked:	false,
					},
				],
			},
			{
				type:		"conformity",
				text:		"Установите соответствие между парами веществ и реагентом, с помощью которого их можно различить: к каждой позиции, обозначенной буквой, подберите соответствующую позицию, обозначенную цифрой.",
				userAnswers:['','',''],
				answer: 	{
					letters: {
						text:	'Пара веществ',
						answers: [
							{
								correct:	3,
								text:		"Муравьиная кислота и этаналь",
							},
							{
								correct:	0,
								text:		"Этан и этен",
							},
							{
								correct:	0,
								text:		"Бензол и фенол",
							},
							{
								correct:	4,
								text:		"Пентин-2 и пентин-1",
							},
						],
					},
					numbers: {
						text:	'Реагент',
						answers: [
							{
								text:	"Br2",
							},
							{
								text:	"H2O",
							},
							{
								text:	"CH4",
							},
							{
								text:	"Na2CO3",
							},
							{
								text:	"Ag2O (р-р)",
							},
						],
					},
				},
			},
		],

		letters: ['А','Б','В','Г','Д','Е','Ё','Ж','З','И']
	},
	computed: {
		total() {
			let result			= 0,
				questionValue	= Math.round(100 / this.questions.length);
			
			for (let i = 0; i < this.questions.length; i++) {
				var correct	= true;
				const question = this.questions[i];
				
				if ( question.type == 'checkbox' ) {
					for (let j = 0; j < question.answers.length; j++) {
						const answer = question.answers[j];
						if ( answer.correct && !answer.checked || !answer.correct && answer.checked ) {
							correct	= false;
							break;
						}
					}
				}
				else if ( question.type == 'conformity' ) {
					for (let j = 0; j < question.answer.letters.answers.length; j++) {
						const answer = question.answer.letters.answers[j];
						if ( answer.correct !== this.questions[i].userAnswers[j]-1 ) {
							correct	= false;
							break;
						}
					}
				}
				if ( correct )
					result += questionValue;
			}

			return result == 100 ? 99 : result;
		},
		progressPercent() {
			return (this.currentQuestion+1) * 100 / this.questions.length+'%';
		},
	},
	methods: {
		zero(val) {
			return val < 10 ? '0'+val : val;
		},
	},
});