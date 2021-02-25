let url = 'http://127.0.0.1:5500/Part2-Cypress/';

describe('Party Horn Tests', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
    });
  
    it('First Test', () => {
      expect(true).to.equal(true);
    });

    it('Slider changes when volume input changes', () => {
      cy.get('#volume-number').clear().type('75');
      cy.get('#volume-slider').then($el => {
        expect($el).to.have.value(75);
      });
    });

    it('Slider reverse test', () => {
      cy.get('#volume-slider').invoke('val', 33).trigger('input');
      cy.get('#volume-number').then($el => {
        expect($el).to.have.value(33);
      });
    });

    it('Audio element changes', () => {
      cy.get('#volume-slider').invoke('val', 33).trigger('input');
      cy.get('#horn-sound').then($el => {
        expect($el).to.have.prop("volume", 0.33);
      });
    });

    // Test the image and sound sources change when party horn radio button selected
    it('Source changes - airHorn', () => {
      cy.get('#radio-air-horn').trigger('change');
      cy.get('#sound-image').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/images/air-horn.svg");
      });
      cy.get('#horn-sound').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/audio/air-horn.mp3");
      });
    });

    it('Source changes - carHorn', () => {
      cy.get('#radio-car-horn').trigger('change');
      cy.get('#sound-image').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/images/car.svg");
      });
      cy.get('#horn-sound').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/audio/car-horn.mp3");
      });
    });

    it('Source changes - partyHorn', () => {
      cy.get('#radio-party-horn').trigger('change');
      cy.get('#sound-image').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/images/party-horn.svg");
      });
      cy.get('#horn-sound').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/audio/party-horn.mp3");
      });
    });

    // Volume image changes for increasing volumes (3 cases)
    it('Volume icon - 0', () => {
      cy.get('#volume-slider').invoke('val', 0).trigger('input');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/icons/volume-level-0.svg");
      });
    });

    it('Volume icon - 1', () => {
      cy.get('#volume-slider').invoke('val', 23).trigger('input');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/icons/volume-level-1.svg");
      });
    });

    it('Volume icon - 2', () => {
      cy.get('#volume-slider').invoke('val', 45).trigger('input');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/icons/volume-level-2.svg");
      });
    });

    it('Volume icon - 3', () => {
      cy.get('#volume-slider').invoke('val', 87).trigger('input');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.prop("src", url + "assets/media/icons/volume-level-3.svg");
      });
    });

    // button disabled
    it('Textbox disabled', () => {
      cy.get('#volume-number').clear().type('f'); //.invoke('val', "f").trigger('input');
      cy.get('#honk-btn').should('have.attr', 'disabled');

    });

    it('True if invalid', () => {
      cy.get('#volume-number').clear().type('110');
      cy.get('input:invalid').should('exist');
    });

    it('True if valid', () => {
      cy.get('#volume-number').clear().type('11');
      cy.get('input:invalid').should('not.exist');
    });
  });