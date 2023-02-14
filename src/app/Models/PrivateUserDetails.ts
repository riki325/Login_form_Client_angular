

export default class PrivateUserDetails {
    constructor
        (
            public Id: number,
            public FirstName: string,
            public LastName: string,
            public IdNumber: string,
            public DateOfBirth: string,
            public Genus: string,
            public HMO: string,
            public FamilyId: number,
            public Status: string,
            public SpouseId :string
        ) { }
}
