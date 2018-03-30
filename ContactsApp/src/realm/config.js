const User = {
	email: "string",
	password: "string"
};

const Contact = {
	name: "string",
	surname: "string",
	address: "string",
	tel: "string",
	mobile: "string",
	photos: [{}],
	email: "string",
	dateOfBirth: "string"
};

const realm = Realm.open({
	schema: [User, Contact]
}).then(realm => {
	realm.write(() => {
		realm.create("User", { email: "jfanne@unicaen.fr", password: "123456" });
	});
});

export default realm;
