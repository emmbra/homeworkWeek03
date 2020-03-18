Approach 1: define all variables

    arrays:
        lowercase
        uppercase
        special characters
        numbers

    for reach array, validate if user wants them included in password

    boolean (T/F) for each array

    userPassword = [empty array]

    finalUserPassword to be sent back to user

    passwordLength (set min/max 8-128)

    need to check that selection falls between min/max

Approach 2: define all functions

    captureUserInputs - get answers to password questions to capture all the info

    selectRandom - selects randomly from array

    passwordAssembler - selects array elements and pushes into blank array

    passwordChecker (bonus component) - how to ensure that there is at least one element from each array in final password

    copyPassword - copies generated password to clipboard

Approach 3: user story (refer to classwork pseudo code)

    put yourself in user's shoes and walk through steps

    1. visit webpage - page loads
    2. user enters length of password
    3. user selects password criteria (uppercase, lowercase, special, numbers)
    4. click password generate button
    5. backend captures all inputs and saves to variables we defined
        a. check for min/max condition of passwordLength
            -if condition met, continue
            -if not, alert user must enter a valid passwordLength
        b. passwordAssembler runs its loops to pull the criteria the user defined and push those to UserPassword array (MEAT OF THE ASSIGNMENT)
            -could write to randomize or;
            -could write to not randomize and to include elements from each array.
        c. passwordChecker - needed if passwordAssembler is randomized
        d. generate finalUserPassword and send to user