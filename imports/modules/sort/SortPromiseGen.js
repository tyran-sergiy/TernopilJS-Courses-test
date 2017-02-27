export const sortPromise = (array, sortType, condition, logs, instance) =>
   () =>
     new Promise((resolve, reject) => {

        logs.push('Starts ' + sortType + ' for ' + condition + ' array');
        instance.logs.set(logs);

        Meteor.call('sort.' + sortType, array,
          (err, res) => {
            if (err) {
              console.log(err);
            }else {
              logs.push('Finish ' + sortType + ' for ' + condition + ' array');
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
