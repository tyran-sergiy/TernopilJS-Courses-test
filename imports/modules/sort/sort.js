export {sort};
function sort(array, sortType, condition, logs, instance) {
  return () =>
     new Promise((resolve, reject) => {

        logs.push('Starts ' + sortType + ' for ' + condition + ' array');
        instance.logs.set(logs);

        Meteor.call('sort.shellSort', array,
          (err, res) => {
            if (err) {
              console.log(err);
            }else {
              logs.push('Finish ' + sortType + ' for ' + condition + ' array');
              instance.logs.set(logs);
              resolve(sortType + res);
            }
          });
      });
}
