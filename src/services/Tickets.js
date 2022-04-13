function GetTickets() {
  return [
    {
      id: 1005, subject: 'I have some Problem', statusId: "Open", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/01', closedDate: null, priority: "High",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
    {
      id: 1006, subject: 'Welcome To Ticketing Service', statusId: "Open", createdDate: '1400/12/02',
      lastReplyDate: '1400/12/12', closedDate: null, priority: "Low",
      lastReplyByEnglish: 'Mina Jalalian', lastReplyByLocal: 'مینا جلالیان',
      details: "ShowDetails"
    },
    {
      id: 1007, subject: 'Server Done', statusId: "Closed", createdDate: '1400/12/03',
      lastReplyDate: '1400/12/03', closedDate: "1400/12/04", priority: "Medium",
      lastReplyByEnglish: 'Mina Jalalian', lastReplyByLocal: 'مینا جلالیان',
      details: "ShowDetails"
    },
    {
      id: 1008, subject: 'I need Users Info', statusId: "Closed", createdDate: '1400/12/05',
      lastReplyDate: '1400/12/5', closedDate: "1400/12/06", priority: "Medium",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
    {
      id: 1009, subject: 'I need Some Atention', statusId: "Closed", createdDate: '1400/12/06',
      lastReplyDate: '1400/12/8', closedDate: "1400/12/08", priority: "Low",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
    {
      id: 1010, subject: 'Data base Problem', statusId: "Closed", createdDate: '1400/12/11',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/12", priority: "Medium",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
    {
      id: 1011, subject: 'We need Access', statusId: "Closed", createdDate: '1400/12/12',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/14", priority: "Low",
      lastReplyByEnglish: 'Mina Jalalian', lastReplyByLocal: 'مینا جلالیان',
      details: "ShowDetails"
    },
    {
      id: 1012, subject: 'Please Update Database information', statusId: "Closed", createdDate: '1400/12/21',
      lastReplyDate: '1400/12/25', closedDate: "1400/12/25", priority: "Low",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
    {
      id: 1013, subject: 'How can i Have Access', statusId: "Closed", createdDate: '1400/12/23',
      lastReplyDate: '1400/12/26', closedDate: "1400/12/27", priority: "High",
      lastReplyByEnglish: 'Mina Jalalian', lastReplyByLocal: 'مینا جلالیان',
      details: "ShowDetails"
    },
    {
      id: 1014, subject: 'BI ', statusId: "Closed", createdDate: '1400/12/28',
      lastReplyDate: '1400/12/28', closedDate: "1400/12/29", priority: "High",
      lastReplyByEnglish: 'Mina Jalalian', lastReplyByLocal: 'مینا جلالیان',
      details: "ShowDetails"
    },
    {
      id: 1015, subject: 'Connection Lost', statusId: "Closed", createdDate: '1400/12/29',
      lastReplyDate: '1400/01/03', closedDate: "1400/01/04", priority: "Medium",
      lastReplyByEnglish: 'Mina Jalalian', lastReplyByLocal: 'مینا جلالیان',
      details: "ShowDetails"
    },
    {
      id: 1016, subject: 'What Can i Do', statusId: "Closed", createdDate: '1400/01/01',
      lastReplyDate: '1400/01/04', closedDate: "1400/01/04", priority: "Low",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
    {
      id: 1017, subject: 'User information', statusId: "Replied", createdDate: '1400/01/03',
      lastReplyDate: '1400/01/03', closedDate: null, priority: "High",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
    {
      id: 1018, subject: 'New Problem', statusId: "Replied", createdDate: '1400/01/04',
      lastReplyDate: '1400/01/05', closedDate: null, priority: "Medium",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
    {
      id: 1019, subject: 'Plesase Fix Data base', statusId: "Open", createdDate: '1400/01/04',
      lastReplyDate: '1400/01/04', closedDate: null, priority: "Low",
      lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
      details: "ShowDetails"
    },
  ];
}

function GetTicketDetails() {
  return {
    id: 1005, subject: 'Internet Connection Problem', statusId: "Open", createdDate: '1400/12/01',
    lastReplyDate: '1400/12/05', closedDate: null, priority: "High",
    lastReplyByEnglish: 'Iman Navidi', lastReplyByLocal: 'ایمان نویدی',
    messages: [
      {
        date: '1400/12/01', htmltext: 'Simple Text for Ticket', summary: 'خالی', from: 'Ehsan',
      },
      {
        date: '1400/12/01', htmltext: 'Active', summary: 'آشکار', from: 'Mohammad',
      },
    ],
  }
}
export { GetTickets, GetTicketDetails };
