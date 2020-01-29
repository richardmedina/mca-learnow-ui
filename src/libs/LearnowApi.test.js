import api from "./LearnowApi"


describe("Api Tests", () => {

    it('Auth.Authenticate', () =>  {
        const spy = jest.spyOn(api, 'post')
            .mockImplementation(() => Promise.resolve({
                token: "MyToken",
                expires: "Expires"
            }))

        api.auth.authenticate('richard', 'medina')
            .then (response => console.log(response))
        
        expect(api.post)
            .toHaveBeenCalledTimes(1)

        spy.mockRestore()
    })
    
})
