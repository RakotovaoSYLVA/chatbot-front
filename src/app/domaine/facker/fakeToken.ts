const
 fakeToken = btoa(JSON.stringify({ alg: 'HS256', type: 'JWT'}))+ '.'+
 btoa(JSON.stringify({ role:'admin', name: 'administrateur'}));
