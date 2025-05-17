import { th } from "@faker-js/faker"
import { expect } from "@playwright/test";

class ProfileSettingsPage {
    constructor(page) {
        this.page = page;

        this.btnCurrentUser = page.getByRole("button", { name: "account of current user" });
        this.btnProfile = page.getByRole("menuitem", { name: "Profile" });
        this.btnLogout = page.getByRole("menuitem", { name: "Logout" });

        this.btnEdit = page.getByRole("button", { name: "EDIT" });
        this.btnChooseFile = page.getByRole("button", { name: "Choose File" });
        this.btnUploadImage = page.getByRole("button", { name: "UPLOAD IMAGE" });
        this.btnUpdate = page.getByRole("button", { name: "UPDATE" });

    }

    async uploadProfileImage(imagePath) {
        await this.btnCurrentUser.click();
        await this.btnProfile.click();
        await this.btnEdit.click();
        await this.btnChooseFile.setInputFiles(imagePath);
        await this.page.waitForTimeout(1000);

        //    this. page.on("dialog", async dialog => {
        //     expect(dialog.type()).toContain('alert');
        //     expect(dialog.message()).toContain("Image uploaded successfully!");
        //     await dialog.accept();

        // })
        await this.btnUploadImage.click();
        await this.page.waitForTimeout(2000);
        this.page.on("dialog", async dialog => {
            expect(dialog.type()).toContain('alert');
            expect(dialog.message()).toContain("User updated successfully!");
            await dialog.accept();

        })
        await this.btnUpdate.click();
        await this.btnCurrentUser.click();
        await this.btnLogout.click();
    }

}

export default ProfileSettingsPage