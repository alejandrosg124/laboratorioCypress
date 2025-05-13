describe('Página de inicio', () => {
  it('Debería cargar correctamente', () => {
    cy.visit('http://localhost:5173');
    cy.contains('contador');
  });
});

describe('Contador aumentar', () => {
  it('debe incrementar el contador al hacer clic', () => {
    cy.visit('/');
    cy.wait(600)
    cy.contains('Aumentar').click();
    cy.wait(600)
    cy.contains('Tienes 1 en el contador');
  });
});

describe('Contador disminuir', () => {
  it('debe disminuir el contador al hacer clic', () => {
    cy.visit('/');
    cy.wait(600)
    cy.contains('Disminuir').click();
    cy.wait(600)
    cy.contains('Tienes 0 en el contador');
  });
});

describe('Contador aumentar, luego disminuir', () => {
  it('debe incrementar, luego disminuir el contador al hacer clic', () => {
    cy.visit('/');
    cy.wait(600)
    cy.contains('Aumentar').click();
    cy.wait(600)
    cy.contains('Disminuir').click();
    cy.wait(600)
    cy.contains('Tienes 0 en el contador');
  });
});

describe('Contador aumentar por numero', () => {
  it('debe aumentar por el numero que pone', () => {
    cy.visit('/');
    cy.wait(600)
    cy.get('input[placeholder="Ingresa un número"').type(10);
    cy.wait(600)
    cy.contains('Aumentar por número').click();
    cy.wait(600)
    cy.contains('Tienes 10 en el contador');
  });
});