import { mount } from '@vue/test-utils'
import Property from '@/components/Property.vue'
import { BCard, BCardImg, BCardText, BCardBody,BButton, BCol, BRow } from 'bootstrap-vue'

describe('Property', () => {
  test('Property component', () => {
    const wrapper = mount(Property, {
        propsData: {
            isSaved: true,
            item: {
				price: "$726,500",
				agency: {
					brandingColors: {
						primary: "#00477F",
					},
					logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
				},
				id: "1",
				mainImage:
					"https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
			},

        },

            stubs: {
                // used to register custom components
                'b-card':BCard,
                'b-card-img':BCardImg,
                'b-card-text':BCardText,
                'b-card-body':BCardBody,
                'b-button':BButton,
                'b-col':BCol,
                'b-row':BRow

        }
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot();
  })
})
