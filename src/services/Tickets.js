function GetTickets() {
  return [
    {
      id: 1005, subject: 'این تیکت تست است', statusId: "Open", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: null, priority: "High",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1006, subject: 'این تیکت تست دوم است', statusId: "Open", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: null, priority: "Low",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1007, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "Medium",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1008, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "Medium",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1009, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "Low",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1010, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "Medium",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1011, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "Low",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1012, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "Low",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1013, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "High",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1014, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "High",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1015, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "Medium",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1016, subject: 'این تیکت تست است', statusId: "Closed", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: "1400/12/04", priority: "Low",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1017, subject: 'این تیکت تست است', statusId: "Replied", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: null, priority: "High",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1018, subject: 'این تیکت تست است', statusId: "Replied", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: null, priority: "Medium",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
    {
      id: 1019, subject: 'این تیکت تست است', statusId: "Open", createdDate: '1400/12/01',
      lastReplyDate: '1400/12/12', closedDate: null, priority: "Low",
      lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    },
  ];
}

function GetTicketDetails() {
  return {
    id: 1005, subject: 'این تیکت تست است', statusId: "باز", createdDate: '1400/12/01',
    lastReplyDate: '1400/12/12', closedDate: null, priority: "زیاد",
    lastReplyByEnglish: 'Nima hadipour', lastReplyByLocal: 'نیما هادی پور',
    messages: [
      {
        date: '1400/12/01', htmltext: 'این یک متن پیش فرض است', summary: 'خالی', from: 'Ehsan',
      },
      {
        date: '1400/12/01', htmltext: 'متن پیش فرض', summary: 'آشکار', from: 'Mohammad',
      },
    ],
  }
}
export { GetTickets, GetTicketDetails };
