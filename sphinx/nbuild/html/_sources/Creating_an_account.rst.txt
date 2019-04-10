Creating an account
================================================================================

.. toctree::
	:maxdepth: 2
	:caption: Creating an account

	Using_Ledgerium_account_new
	Using_Ledgerium_console



	.. Warning:: |remember_backup| In order to send transactions from an account, including sending ether, you must have BOTH the keyfile and the password. Be absolutely sure to have a copy of your keyfile AND remember the password for that keyfile, and store them both as securely as possible. There are no escape routes here; lose the keyfile or forget your password and all your ether is gone. It is NOT possible to access your account without a password and there is no *forgot my password* option here. Do not forget it.

	.. |remember_backup| raw:: html

	   <strong>Remember your passwords and <a href="#backup-and-restore-accounts">backup your keyfiles</a>.</strong>

	Using ``geth account new``
	--------------------------------------------------------------------------------

	Once you have the geth client installed, creating an account is merely a case of executing the ``geth account new`` command in a terminal.

	Note that you do not have to run the geth client or sync up with the blockchain to use the ``geth account`` command.

	.. code-block:: bash

	  $ geth account new

	    Your new account is locked with a password. Please give a password. Do not forget this password.
	    Passphrase:
	    Repeat Passphrase:
	    Address: {168bc315a2ee09042d83d7c5811b533620531f67}

	For non-interactive use you supply a plaintext password file as argument to the ``--password`` flag. The data in the file consists of the raw bytes of the password optionally followed by a single newline.

	.. code-block:: bash

	  $ geth --password /path/to/password account new

	..  Warning:: The ``--password`` flag is meant to be used only for testing or automation in trusted environments. It is a bad idea to save your password to file or expose it in any other way. If you do use the ``--password`` flag with a password file, make sure the file is not readable or even listable for anyone but you. You can achieve this in Mac/Linux systems with:

	.. code-block:: bash

	  touch /path/to/password
	  chmod 600 /path/to/password
	  cat > /path/to/password
	  >I type my pass


	To list all the accounts with keyfiles currently in your ``keystore`` folder use the ``list`` subcommand of the ``geth account`` command:

	.. code-block:: bash

	  $ geth account list

	  account #0: {a94f5374fce5edbc8e2a8697c15331677e6ebf0b}
	  account #1: {c385233b188811c9f355d4caec14df86d6248235}
	  account #2: {7f444580bfef4b9bc7e14eb7fb2a029336b07c9d}


	The filenames of keyfiles has the format ``UTC--<created_at UTC ISO8601>-<address hex>``. The order of accounts when listing, is lexicographic, but as a consequence of the timestamp format, it is actually order of creation.


	Using geth console
	--------------------------------------------------------------------------------

	In order to create a new account using geth, we must first start geth in console mode (or you can use ``geth attach`` to attach a console to an already running instance):

	.. code-block:: bash

	  > geth console 2>> file_to_log_output
	  instance: Geth/v1.4.0-unstable/linux/go1.5.1
	  coinbase: coinbase: [object Object]
	  at block: 865174 (Mon, 18 Jan 2016 02:58:53 GMT)
	  datadir: /home/USERNAME/.Ledgerium

	The console allows you to interact with your local node by issuing commands. For example, try the command to list your accounts:

	.. code-block:: javascript

	  > eth.accounts

	  {
	  code: -32000,
	  message: "no keys in store"
	  }

	This shows that you have no accounts. You can also create an account from the console:

	.. code-block:: javascript

	  > personal.newAccount()
	  Passphrase:
	  Repeat passphrase:
	  "0xb2f69ddf70297958e582a0cc98bce43294f1007d"

	.. Note:: Remember to use a strong and randomly generated password.

	We just created our first account. If we try to list our accounts again we can see our new account:

	.. code-block:: javascript

	  > eth.accounts
	  ["0xb2f69ddf70297958e582a0cc98bce43294f1007d"]
