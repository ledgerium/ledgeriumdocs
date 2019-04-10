Using Ledgerium
==========================================

.. toctree::
	:maxdepth: 2
	:caption: Using Ledgerium

	RPC
	Solidity

Every option related to key management available using geth can be used the same way in eth.

	Below are "account" related options:

	.. code-block:: javascript

	  > eth account list  // List all keys available in wallet.
	  > eth account new   // Create a new key and add it to the wallet.
	  > eth account update [<uuid>|<address> , ... ]  // Decrypt and re-encrypt given keys.
	  > eth account import [<uuid>|<file>|<secret-hex>] // Import keys from given source and place in wallet.

	Below are "wallet" related option:

	.. code-block:: javascript

	  > eth wallet import <file> //Import a presale wallet.

	.. Note:: the 'account import' option can only be used to import generic key file. the 'wallet import' option can only be used to import a presale wallet.

	It is also possible to access keys management from the integrated console (using the built-in console or geth attach):

	.. code-block:: javascript

	  > web3.personal
	  {
		listAccounts: [],
		getListAccounts: function(callback),
		lockAccount: function(),
		newAccount: function(),
		unlockAccount: function()
	  }
