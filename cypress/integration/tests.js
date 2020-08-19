/* eslint-disable no-undef */
describe("App events testing", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.server();
	});

	it("should add new event", () => {
		cy.get("#addNewEvent").should("be.visible").click();

		const name = "Test event name";
		const host = "Test host";
		const location = "Bratislava";
		const description = "Test description";
		const date = new Date();
		const today = date.getDate();

		cy.get("#name-test-id").type(name).should("have.value", name);

		cy.get("#host-test-id").type(host).should("have.value", host);

		cy.get("#location-test-id").type(location).should("have.value", location);

		cy.get("#description-test-id")
			.type(description)
			.should("have.value", description);

		cy.get(".react-datepicker__input-container #event-date-test-id").click();
		cy.contains(today).not(".react-datepicker__day--disabled").click();
		cy.wait(1000);

		cy.get(".react-datepicker__input-container #event-ends-test-id").click();
		cy.get(`.react-datepicker__day--001`)
			.not(".react-datepicker__day--disabled")
			.click();

		cy.get("#submit-test-id").click();

		cy.contains(name).should("be.visible").click();
	});

	it("should remove event", () => {
		cy.get(".icon-trash").should("be.visible").first().click();
	});
});
