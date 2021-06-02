export class Constants {
  public static readonly tableDefaults = {
    DEFAULT_CURRENT_PAGE: 1,
    DEFAULT_PAGE_SIZE: 10,
    DEFAULT_SORT_BY: '-datePosted',
    DEFAULT_KEYWORDS: '',
    DEFAULT_SHOW_MORE_INCREMENT: 5,
    DEFAULT_DATASET: '',
    DEFAULT_PAGE_SIZE_OPTIONS: [
      { displayText: '10', value: 10 },
      { displayText: '25', value: 25 },
      { displayText: '50', value: 50 },
      { displayText: '100', value: 100 }
    ]
  };

  public static readonly mockPass1 = {
    _id: 100,
    _schemaName: 'Pass',
    firstName: 'Frank',
    lastName: 'Sinatra',
    email: 'frank@gmail.com',
    confirmationNumber: 'b289djd831',
    numberOfGuests: 3,
    facility: 10
  };

  public static readonly mockFacility1 = {
    _id: 10,
    _schemaName: 'Facility',
    name: 'Goldstream Trail A',
    type: 'trail',
    time: 'AM',
    capacity: 400,
    status: 'open',
    passes: [100],
    park: 1
  };

  public static readonly mockFacility2 = {
    _id: 11,
    _schemaName: 'Facility',
    name: 'Goldstream Trail A',
    type: 'trail',
    time: 'PM',
    capacity: 400,
    status: 'open',
    passes: [100],
    park: 1
  };

  public static readonly mockFacility3 = {
    _id: 12,
    _schemaName: 'Facility',
    name: 'Goldstream Parking Lot',
    type: 'parking',
    time: 'All Day',
    capacity: 100,
    status: 'open',
    passes: [2],
    park: 1
  };

  public static readonly mockFacility4 = {
    _id: 13,
    _schemaName: 'Facility',
    name: 'Goldstream Closed Facility',
    type: 'trail',
    time: 'All Day',
    capacity: 100,
    status: false,
    passes: [2],
    park: 1
  };

  public static readonly mockFacility5 = {
    _id: 13,
    _schemaName: 'Facility',
    name: 'Goldstream Low Capacity',
    type: 'trail',
    time: 'PM',
    capacity: 100,
    status: true,
    passes: [95],
    park: 1
  };

  public static readonly mockFacility6 = {
    _id: 13,
    _schemaName: 'Facility',
    name: 'Goldstream Full Capacity',
    type: 'trail',
    time: 'AM',
    capacity: 100,
    status: true,
    passes: [100],
    park: 1
  };

  public static readonly mockFacilityList = [
    {rowData: Constants.mockFacility1},
    {rowData: Constants.mockFacility2},
    {rowData: Constants.mockFacility3},
    {rowData: Constants.mockFacility4},
    {rowData: Constants.mockFacility5},
    {rowData: Constants.mockFacility6},
  ];

  public static readonly mockPark1 = {
    _id: 1,
    _schemaName: 'Park',
    name: 'Cypress',
    description: 'The towering North Shore Mountains which form a backdrop to the bustling city of Vancouver have beckoned outdoor recreationists for many years. Until the opening of the Lions Gate Bridge in 1939, a fleet of ferries transported hikers and skiers across Burrard Inlet on the first leg of their journey to Hollyburn Ridge, which is now part of Cypress Provincial Park.',
    status: 'open',
    facilities: [10, 11]
  };

  public static readonly mockPark2 = {
    _id: 2,
    _schemaName: 'Park',
    name: 'Mount Seymour',
    status: 'open',
    facilities: []
  };

  public static readonly mockPark3 = {
    _id: 3,
    _schemaName: 'Park',
    name: 'Golden Ears',
    status: 'open',
    facilities: []
  };

  public static readonly mockPark4 = {
    _id: 4,
    _schemaName: 'Park',
    name: 'Joffre Lakes',
    status: false,
    facilities: []
  };

  public static readonly mockPark5 = {
    _id: 5,
    _schemaName: 'Park',
    name: 'Stawamus Chief',
    status: 'open',
    facilities: []
  };

  public static readonly mockPark6 = {
    _id: 6,
    _schemaName: 'Park',
    name: 'Garibaldi',
    status: 'open',
    facilities: []
  };

  public static readonly mockPark7 = {
    _id: 7,
    _schemaName: 'Park',
    name: 'Mount Robson',
    status: 'open',
    facilities: []
  };

  public static readonly mockParkList = [
    { rowData: Constants.mockPark1 },
    { rowData: Constants.mockPark2 },
    { rowData: Constants.mockPark3 },
    { rowData: Constants.mockPark4 },
    { rowData: Constants.mockPark5 },
    { rowData: Constants.mockPark6 },
    { rowData: Constants.mockPark7 }
  ];

}
