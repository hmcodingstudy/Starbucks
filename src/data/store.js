import { configureStore, createSlice } from '@reduxjs/toolkit';

// 카운터
const counter = createSlice({
    name: 'counter',
    initialState: {
        value: 1,
    },
    reducers: {
      increment: state => {
        state.value += 1;
      },
      decrement: state => {
        state.value -= 1;
      },
      initialCount: (state, action) => {
        state.value = 1;
      },
    },
  });

// 장바구니
let cart_ = createSlice({
    name : 'cart_',
    initialState : [],
    reducers : {
    cart_increment(state, action){
        state[action.payload].count++
    },
    cart_decrement(state, action) {
        state[action.payload].count--
    },
    cart_initialCount: (state, action) => {
        state[action.payload].count = 1;
      },
    addItem(state, action){
        state.push(action.payload)
    },
    deleteItem(state, action){
        state.splice(action.payload,1)
    },
    clearCart(state, action){
        // state = []
        state.splice(action.payload)
    }
}
})


// 장바구니 옵션용
let option = createSlice({
name : 'option',
initialState : {
    size: 'Tall',
    cup : '매장컵'
},
reducers : {
    Tall(state, action){
        state.size = 'Tall'
    },
    Grande(state, action){
        state.size = 'Grande'
    },
    Venti(state, action){
        state.size = 'Venti'
    },
    StoreCup(state){
        state.cup = '매장컵'
    },
    PersonalCup(state){
        state.cup = '개인컵'
    },
    DisposableCup(state){
        state.cup = '일회용컵'
    },
    initialAllOptions(state, action){
        state.size = 'Tall'
        state.cup = '매장컵'
    }
}
})

// 전체 상품
let item = createSlice({
    name: "item",
    initialState : [
        {
            id : 0,
            count: 1,
            kTitle : "자바 칩 프라푸치노",
            eTitle : "Java Chip Frappuccino",
            price : 6300,
            content: "커피, 모카 소스, 진한 초콜릿 칩이 입안 가득 느껴지는 스타벅스에서만 맛볼 수 있는 프라푸치노",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[168016]_20210415154152277.jpg",
            cate : "best"
        },
        {
            id : 1,
            count: 1,
            kTitle : "돌체 콜드 브루",
            eTitle : "Dolce Cold Brew",
            price : 6000,
            content: "무더운 여름철,동남아 휴가지에서 즐기는 커피를 떠오르게 하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg",
            cate : "best"
        },
        {
            id : 2,
            count: 1,
            kTitle : "더블 에스프레소 칩 프라푸치노",
            eTitle : "Double Espresso Chip Frappuccino",
            price : 6300,
            content: "리스트레토 에스프레소 2샷과 에스프레소 칩, 하프앤하프가 진하게 어우러진 커피의 기본에 충실한 프라푸치노",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002760]_20210415133558221.jpg",
            cate : "best"
        },
        {
            id : 3,
            kTitle : "콜드 브루",
            eTitle : "Cold Brew",
            price : 4900,
            content: "콜드 브루 전용 원두를 차가운 물로 추출하여 한정된 양만 제공됩니다. 깊은 풍미의 새로운 커피 경험을 즐겨보세요.",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202595.jpg",
            cate : "best"
        },
        {
            id : 4,
            kTitle : "콜드 브루 오트 라떼",
            eTitle : "Cold Brew with Oat Milk",
            price : 5800,
            content: "콜드 브루의 풍미와 깔끔한 오트 밀크가 어우러진 달콤 고소한 라떼. 식물성 밀크를 사용해 모든 고객이 부담없이 즐길 수 있는 콜드 브루 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437226.jpg",
            cate : "best"
        },
        {
            id : 10,
            kTitle : "블랙 햅쌀 고봉 라떼",
            eTitle : "Black Rice Latte",
            price : 6000,
            content: "검은 토끼의 해에 새롭게 돌아온 햅쌀 라떼. 에스프레소 샷과 어우러진 쌀, 흑임자가 더해져 더욱 고소해지고 입에서 톡톡 터지는 흑미 토핑이 소복하게 쌓여 건강하게 즐기는 라떼 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004314]_20221121145745496.jpg",
            cate : "new"
        },
        {
            id : 11,
            kTitle : "스타벅스 튜메릭 라떼",
            eTitle : "Starbucks® Turmeric Latte",
            price : 5300,
            content: "몸에 좋은 튜메릭이 은은하고 담백하게 블론드 샷과 어우러진 라떼. 추운 겨울철 가슴 속에서부터 따뜻한 기운을 복돋아 주는 이국적인 느낌의 라떼 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004320]_20221121145852276.jpg",
            cate : "new"
        },
        {
            id : 12,
            kTitle : "아이스 블랙 햅쌀 고봉 라떼",
            eTitle : "Iced Black Rice Latte",
            price : 5700,
            content: "검은 토끼의 해에 새롭게 돌아온 햅쌀 라떼. 에스프레소 샷과 어우러진 쌀, 흑임자가 더해져 더욱 고소해지고 입에서 톡톡 터지는 흑미 토핑이 소복하게 쌓여 건강하게 즐기는 라떼 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004317]_20221121145819637.jpg",
            cate : "new"
        },
        {
            id : 13,
            kTitle : "아이스 스타벅스 튜메릭 라떼",
            eTitle : "Iced Starbucks® Turmeric Latte",
            price : 6500,
            content: "몸에 좋은 튜메릭이 은은하고 담백하게 블론드 샷과 어우러진 라떼. 추운 겨울철 가슴 속에서부터 따뜻한 기운을 복돋아 주는 이국적인 느낌의 라떼 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004323]_20221121145938149.jpg",
            cate : "new"
        },
        {
            id : 14,
            kTitle : "골든 미모사 그린 티",
            eTitle : "Golden Mimosa Green Tea",
            price : 6900,
            content: "라이트한 탄산감과 함께 오렌지, 모스카토, 그린 티가 상쾌하게 어우러진 논알콜 미모사 티 칵테일 음료. 모스카토 젤리와 오렌지 제스트의 또 다른 식감과 비주얼이 음료에 색다른 매력을 더해주는 티 베리에이션 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004326]_20221121145701008.jpg",
            cate : "new"
        }]
})

let BestDrinkStore = createSlice({
    name: "BestDrinkStore",
    initialState :[
        {
            id : 0,
            count: 1,
            kTitle : "자바 칩 프라푸치노",
            eTitle : "Java Chip Frappuccino",
            price : 6300,
            content: "커피, 모카 소스, 진한 초콜릿 칩이 입안 가득 느껴지는 스타벅스에서만 맛볼 수 있는 프라푸치노",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[168016]_20210415154152277.jpg",
            cate : "best"
        },
        {
            id : 1,
            count: 1,
            kTitle : "돌체 콜드 브루",
            eTitle : "Dolce Cold Brew",
            price : 6000,
            content: "무더운 여름철,동남아 휴가지에서 즐기는 커피를 떠오르게 하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg",
            cate : "best"
        },
        {
            id : 2,
            count: 1,
            kTitle : "더블 에스프레소 칩 프라푸치노",
            eTitle : "Double Espresso Chip Frappuccino",
            price : 6300,
            content: "리스트레토 에스프레소 2샷과 에스프레소 칩, 하프앤하프가 진하게 어우러진 커피의 기본에 충실한 프라푸치노",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002760]_20210415133558221.jpg",
            cate : "best"
        },
        {
            id : 3,
            kTitle : "콜드 브루",
            eTitle : "Cold Brew",
            price : 4900,
            content: "콜드 브루 전용 원두를 차가운 물로 추출하여 한정된 양만 제공됩니다. 깊은 풍미의 새로운 커피 경험을 즐겨보세요.",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202595.jpg",
            cate : "best"
        },
        {
            id : 4,
            kTitle : "콜드 브루 오트 라떼",
            eTitle : "Cold Brew with Oat Milk",
            price : 5800,
            content: "콜드 브루의 풍미와 깔끔한 오트 밀크가 어우러진 달콤 고소한 라떼. 식물성 밀크를 사용해 모든 고객이 부담없이 즐길 수 있는 콜드 브루 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437226.jpg",
            cate : "best"
        }]
})

let NewDrinkStore = createSlice({
    name: "NewDrinkStore",
    initialState :[
        {
            id : 10,
            kTitle : "블랙 햅쌀 고봉 라떼",
            eTitle : "Black Rice Latte",
            price : 6000,
            content: "검은 토끼의 해에 새롭게 돌아온 햅쌀 라떼. 에스프레소 샷과 어우러진 쌀, 흑임자가 더해져 더욱 고소해지고 입에서 톡톡 터지는 흑미 토핑이 소복하게 쌓여 건강하게 즐기는 라떼 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004314]_20221121145745496.jpg",
            cate : "new"
        },
        {
            id : 11,
            kTitle : "스타벅스 튜메릭 라떼",
            eTitle : "Starbucks® Turmeric Latte",
            price : 5300,
            content: "몸에 좋은 튜메릭이 은은하고 담백하게 블론드 샷과 어우러진 라떼. 추운 겨울철 가슴 속에서부터 따뜻한 기운을 복돋아 주는 이국적인 느낌의 라떼 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004320]_20221121145852276.jpg",
            cate : "new"
        },
        {
            id : 12,
            kTitle : "아이스 블랙 햅쌀 고봉 라떼",
            eTitle : "Iced Black Rice Latte",
            price : 5700,
            content: "검은 토끼의 해에 새롭게 돌아온 햅쌀 라떼. 에스프레소 샷과 어우러진 쌀, 흑임자가 더해져 더욱 고소해지고 입에서 톡톡 터지는 흑미 토핑이 소복하게 쌓여 건강하게 즐기는 라떼 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004317]_20221121145819637.jpg",
            cate : "new"
        },
        {
            id : 13,
            kTitle : "아이스 스타벅스 튜메릭 라떼",
            eTitle : "Iced Starbucks® Turmeric Latte",
            price : 6500,
            content: "몸에 좋은 튜메릭이 은은하고 담백하게 블론드 샷과 어우러진 라떼. 추운 겨울철 가슴 속에서부터 따뜻한 기운을 복돋아 주는 이국적인 느낌의 라떼 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004323]_20221121145938149.jpg",
            cate : "new"
        },
        {
            id : 14,
            kTitle : "골든 미모사 그린 티",
            eTitle : "Golden Mimosa Green Tea",
            price : 6900,
            content: "라이트한 탄산감과 함께 오렌지, 모스카토, 그린 티가 상쾌하게 어우러진 논알콜 미모사 티 칵테일 음료. 모스카토 젤리와 오렌지 제스트의 또 다른 식감과 비주얼이 음료에 색다른 매력을 더해주는 티 베리에이션 음료",
            img: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/11/[9200000004326]_20221121145701008.jpg",
            cate : "new"
        }]
})

// 유저 정보(결제내역 저장)
let user = createSlice({
    name : 'user',
    initialState : [],
    reducers:{
        addPaymentDetails(state, action){
            state.push(action.payload)
        },
    }
})

export let { increment, decrement,initialCount } = counter.actions
export let { addItem, deleteItem, cart_increment, cart_decrement, cart_initialCount, clearCart } = cart_.actions
export let { Tall, Grande, Venti, StoreCup, PersonalCup, DisposableCup, initialAllOptions} = option.actions
export let { changeBestDrink, changeNewDrink} = item.actions
export let { addPaymentDetails } = user.actions

export default configureStore({
  reducer: {
    counter: counter.reducer,
    option: option.reducer,
    item : item.reducer,
    cart_ : cart_.reducer,
    NewDrinkStore : NewDrinkStore.reducer,
    BestDrinkStore : BestDrinkStore.reducer,
    user : user.reducer,
  }
}) 