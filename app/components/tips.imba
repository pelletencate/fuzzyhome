let p = console.log

tag app-tip

	<self
		@click.if(tip.click_handler)=tip.click_handler
	>
		css d:flex fld:column jc:start fl:1
			bdr:1px solid
			bc:$tip-bc
			min-width:0 ta:center p:10px
			cursor:pointer transition:background 100ms
			@first ta:left rdl:3px
			@last ta:right bd:none rdr:3px
			@hover bg:$tip-hover-c
		if tip.placeholder or not tip.click_handler
			css
				@hover @important cursor:auto bg:none

		if tip.hotkey_handler and tip.hotkey
			<@hotkey(tip.hotkey).force=tip.hotkey_handler>
				css d:none

		<.tip-hotkey> tip.hotkey_display_name
			css fs:12px c:$tip-hotkey-c

		<.tip-content> tip.content
			css pt:2px fs:14px c:$tip-content-c

export default class Tips

	def constructor
		store = $1

	show_more = no
	tips = []

	def show_more_tips
		show_more = yes

	def hide_more_tips
		show_more = no

	def toggle_more_tips
		show_more = not show_more

	def pad arr
		let i = arr.length
		while i < 3
			arr.push { placeholder: yes }
			i += 1

	def get_chunks
		let chunks = store.chunk(tips, 3)
		pad(chunks[-1])
		chunks

	get view

		let chunks = get_chunks!

		<[d:none]=!store.config.data.enable_tips>
			css d:flex fld:column gap:15px max-height:75%

			css .tip-row
				d:flex fld:row w:100% fl:1
				fs:20px fs:14px
				jc:end ta:center

			<.tip-row>
				for tip in chunks[0]
					<app-tip tip=tip>

			if chunks.length > 1

				<@click=toggle_more>
					css w:100% d:flex ja:center c:$button-c rdb:4px cursor:pointer
						transition:background 100ms
						@hover bg:$tip-hover-c
					if store.tips.show_more
						css rd:0

					<svg src="../assets/chevron-down.svg">
						css w:15px transition:transform 150ms
						if store.tips.show_more
							css transform:rotate(180deg)

				<.more>
					css d:flex fld:column gap:15px ofy:auto 
					unless store.tips.show_more
						css d:none

					for row in chunks.slice(1)
						<.tip-row>
							for tip in row
								<app-tip tip=tip>
