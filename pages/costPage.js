class CostPage {

    constructor(page) {
        this.page = page;

        this.btnAddCost = page.getByRole("button", { name: "Add Cost" });
        this.txtItemName = page.getByRole("textbox", { name: "Item Name" });

       // quantity container
        this.quantityContainer = page.locator('.quantity-container');
        this.btnQuantityDecrease = this.quantityContainer.locator('button').first();
        this.btnQuantityIncrease = this.quantityContainer.locator('button').last();
        this.btnQuantity = this.quantityContainer.locator('input[type="number"]');

        this.amountInput = page.getByRole('spinbutton', { name: 'Amount' });
        this.txtRemarks = page.getByRole('textbox', { name: 'Remarks' });
        this.btnSubmit = page.getByRole('button', { name: 'Submit' });
        
         this.itemRows = page.locator('table tbody tr');
    }

  async setQuantity(targetQuantity) {
  let currentQuantity = parseInt(await this.btnQuantity.inputValue(), 10);

  while (currentQuantity < targetQuantity) {
    await this.btnQuantityIncrease.click();
    currentQuantity++;
  }

  while (currentQuantity > targetQuantity) {
    if (await this.btnQuantityDecrease.isEnabled()) {
      await this.btnQuantityDecrease.click();
      currentQuantity--;
    } else {
      break;
    }
  }
}

    async addItem(costModel) {
      
        await this.btnAddCost.click();
       
        await this.txtItemName.fill(costModel.name);
        await this.setQuantity(costModel.quantity);
        await this.amountInput.fill(costModel.amount.toString());
        if (costModel.remarks) {
            await this.txtRemarks.fill(costModel.remarks);
        }
        await this.btnSubmit.click();
        await this.page.waitForTimeout(500);
    }
    async getItemCount() {
    return await this.itemRows.count();
  }

}
export default CostPage;