tag app-link

	def handle_delete link
		return unless window.confirm "Do you really want to delete {link..display_name}?"
		api.delete_link link

	def handle_pin link
		api.pin_link link

	def render
		<self
			@pointerover=api.set_link_selection_index(index)
			@click=api.handle_click_link
			.selected=(index is state.link_selection_index)
		>
			css d:flex fld:row jc:space-between ai:center
				px:16px py:11px rd:5px cursor:pointer c:$text-c
			if link.is_bang
				css c:$bang-c

			<.link-left>
				css d:flex fl:3

				<img.link-icon src=link.icon>
					css w:20px h:20px mr:10px rd:3px

				<.display-name> link.display_name
					css tt:capitalize fs:20px overflow-wrap:anywhere

				if link.display_name isnt link.name and config.data.enable_effective_names
					<.name>
						css d:flex ja:center c:$effective-name-c ml:10px fs:14px
						css .parens fs:10px c:$effective-name-parens-c

						<span.parens> "("
						<span> link.name
						<span.parens> ")"

			<.link-right>
				css fl:1 d:flex fld:row jc:space-between ai:center

				css .buttons-disabled .link-button visibility:hidden
				css .selected .link-button visibility:visible

				<.link-buttons .buttons-disabled=!config.data.enable_buttons>
					css d:flex fld:row jc:start ai:center gap:5px

					css .link-button visibility:hidden rd:3px c:$button-c fs:15px cursor:pointer px:3px
					if index is state.link_selection_index
						css .link-button visibility:visible

					css .link-button svg w:15px

					<.link-button@click.prevent.stop=handle_edit>
						<svg src='../assets/edit-2.svg'>

					<.link-button@click.prevent.stop=handle_delete(link)>
						<svg src='../assets/trash.svg'>

					<.link-button @click.prevent.stop=handle_pin(link)>
						if link.is_pinned
							css visibility:visible c:$button-dim-c

						<svg src='../assets/star.svg'>

				<.frequency> link.frequency
					css fs:15px ml:7px
