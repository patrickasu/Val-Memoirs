const initState = {
	posts: [
		{
			img_src: "https://www.bellanaija.com/wp-content/uploads/2019/02/IMG_5213-600x400.jpg",
			description: "My girlfriend and I were brought together",
			title: "A lasting Legacy of Love",
			name: "Posted by Christian",
		},
		{
			img_src: "https://travel.jumia.com/blog/ng/wp-content/uploads/2016/02/valentines1.jpg",
			description: "My girlfriend and I were brought together",
			title: "Passion Extinguished",
			name: "Posted by Kingsley Lawrence",
		},
		{
			img_src: "https://www.bellanaija.com/wp-content/uploads/2018/03/Airwick-Valentine-Campaign-Couples-Dinner-22.jpg",
			description: "My girlfriend and I were brought together",
			title: "Today was Fun",
			name: "Posted by Jane Wise",
		},
		{
			img_src: "http://i1.wp.com/blog.multitexter.com/wp-content/uploads/2015/02/send-bulk-sms.jpg?fit=849%2C566",
			description: "My girlfriend and I were brought together",
			title: "Why I love Val",
			name: "Posted by Victor Moses",
		},
		{
			img_src: "https://guardian.ng/wp-content/uploads/2017/01/Ijeoma-Agu.jpg",
			description: "My girlfriend and I were brought together",
			title: "My first Valentine experience",
			name: "Posted by Mercy Loveth",
		},
		{
			img_src: "http://dailypost.ng/wp-content/uploads/2017/03/debbie-rise.jpg",
			description: "My girlfriend and I were brought together",
			title: "Come lets have fun",
			name: "Posted by Chioma Jik",
		},
	]
}

const postReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_POST':
		return {
			...state,
			posts: [action.post, ...state.posts]
		}

		default:
    	return state
	}
}

export default postReducer;