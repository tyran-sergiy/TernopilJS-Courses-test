export const sortPromise = (array, sortType, arrCondition, logs, instance) =>  // return function, that return Promise with desire sort method
   () =>
     new Promise((resolve, reject) => {

        logs.push('Starts ' + sortType + ' for ' + arrCondition + ' array');
        instance.logs.set(logs);

        Meteor.call('sort.' + sortType, array,
          (err, res) => {
            if (err) {
              console.log(err);
            }else {
              logs.push('Finish ' + sortType + ' for ' + arrCondition + ' array');
              instance.logs.set(logs);
              resolve({
                sortType: sortType,
                time: res,
              });
            }
          });
      }).catch((err) => {
        console.log(err);
      });

//more than html/css i hate only promises
